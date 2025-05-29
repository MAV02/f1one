import pdf from 'html2pdf.js';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import ReportDocument from '@/components/pdf/ReportDocument';

const generateAndUploadReport = async ({
  title,
  content,
  isPro,
  uid,
}: {
  title: string;
  content: string;
  isPro: boolean;
  uid: string;
}) => {
  const blob = await pdf(<ReportDocument title={title} content={content} isPro={isPro} />).toBlob();
  const filename = `report-${Date.now()}.pdf`;
  const storageRef = ref(storage, `exports/${uid}/${filename}`);
  await uploadBytes(storageRef, blob);
  return filename;
};

export { generateAndUploadReport };