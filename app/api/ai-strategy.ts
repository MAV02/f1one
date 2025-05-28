import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const prompt = messages.map((m: any) => \`\${m.role === 'user' ? 'User' : 'Assistant'}: \${m.content}\`).join('\n');

  const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${process.env.OPENAI_API_KEY}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are an F1 strategy engineer. Give short, smart advice like a race strategist.' },
        ...messages,
      ],
      temperature: 0.7,
    }),
  });

  const data = await openaiRes.json();

  const reply = data.choices?.[0]?.message?.content || 'No response available.';

  return NextResponse.json({ reply });
}
