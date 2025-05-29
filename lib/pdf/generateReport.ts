'use client';

import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import ReportDocument from '@/components/pdf/ReportDocument';
import { pdf } from '@react-pdf/renderer';
import { getDownloadURL } from 'firebase/storage';

export const generateAndUploadReport = async (
  title: string,
  content: string,
  userEmail: string,
  track: string,
  driver: string
): Promise<string> => {
  const blob = await pdf(
    <ReportDocument title={title} content={content} />
  ).toBlob();

  const timestamp = Date.now();
  const sanitizedEmail = userEmail.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `report_${sanitizedEmail}_${track}_${driver}_${timestamp}.pdf`;

  const fileRef = ref(storage, `reports/${filename}`);
  await uploadBytes(fileRef, blob);

  const downloadURL = await getDownloadURL(fileRef);
  return downloadURL;
};
