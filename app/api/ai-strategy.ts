
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const prompt = messages.map((m: any) => \`\${m.role === 'user' ? 'User' : 'Assistant'}: \${m.content}\`).join('\n');

  const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }, ...messages],
    }),
  });

  const data = await openaiRes.json();
  return NextResponse.json(data);
}
