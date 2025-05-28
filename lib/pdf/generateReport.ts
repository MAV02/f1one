import { pdf } from '@react-pdf/renderer';
import ReportDocument from './ReportDocument';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/lib/firebase';

export async function generateAndUploadReport({
  title,
  content,
  isPro,
  uid,
}: {
  title: string;
  content: string;
  isPro: boolean;
  uid: string;
}) {
  const blob = await pdf(<ReportDocument title={title} content={content} isPro={isPro} />).toBlob();
  const filename = `report-${Date.now()}.pdf`;

  const storageRef = ref(storage, `exports/${uid}/${filename}`);
  await uploadBytes(storageRef, blob);

  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = filename;
  link.click();
}
