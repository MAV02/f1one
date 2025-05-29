
import { pdf } from '@react-pdf/renderer';
import { ref, uploadBytes } from 'firebase/storage';
import storage from '../firebase';
import ReportDocument from './ReportDocument'; // Importing as a component

export async function generateReport({
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
  const blob = await pdf(
    <ReportDocument title={title} content={content} isPro={isPro} />
  ).toBlob();

  const filename = `report-${Date.now()}.pdf`;
  const storageRef = ref(storage, `exports/${uid}/${filename}`);
  await uploadBytes(storageRef, blob);
  return filename;
}
