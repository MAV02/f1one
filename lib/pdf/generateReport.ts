const isClient = typeof window !== 'undefined';

export const generateReport = async (
  content: string,
  title: string,
  fileName: string
) => {
  if (!isClient) return;

  const html2pdf = (await import('html2pdf.js')).default;
  const element = document.createElement('div');
  element.innerHTML = `<h1>${title}</h1><div>${content}</div>`;

  const opt = {
    margin: 0.5,
    filename: `${fileName}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  html2pdf().from(element).set(opt).save();
};
