import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import ReportDocument from '@/components/pdf/ReportDocument';

export const generateAndUploadPDF = async (
  contentRef: React.RefObject<HTMLElement>,
  title: string,
  track: string,
  driver: string
) => {
  if (typeof window === 'undefined') return;

  const html2pdf = (await import('html2pdf.js')).default;

  if (!contentRef.current) return;

  const element = contentRef.current;
  const opt = {
    margin: 0,
    filename: `${title}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  const pdfBlob: Blob = await html2pdf().from(element).set(opt).outputPdf('blob');

  const storageRef = ref(storage, `pdfs/${title}.pdf`);
  await uploadBytes(storageRef, pdfBlob);
};
