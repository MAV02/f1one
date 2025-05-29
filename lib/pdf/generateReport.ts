// lib/pdf/generateReport.ts

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { jsPDF } from 'jspdf';
import { firebaseConfig } from '@/lib/firebase';

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export async function generateAndUploadReport(
  title: string,
  content: string,
  isPro: boolean,
  uid: string,
  fileName: string
): Promise<string> {
  const docPdf = new jsPDF();
  docPdf.setFontSize(16);
  docPdf.text(title, 20, 20);
  docPdf.setFontSize(12);
  docPdf.text(content, 20, 40);

  const pdfBlob = docPdf.output('blob');

  const storageRef = ref(storage, `reports/${uid}/${fileName}`);
  const snapshot = await uploadBytes(storageRef, pdfBlob);
  const downloadURL = await getDownloadURL(snapshot.ref);

  // Optional: Save metadata to Firestore
  await setDoc(doc(db, 'reports', `${uid}_${Date.now()}`), {
    title,
    isPro,
    uid,
    downloadURL,
    createdAt: new Date().toISOString(),
  });

  return downloadURL;
}
