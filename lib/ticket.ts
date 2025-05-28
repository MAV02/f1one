import { db, storage } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

export async function getUserTickets(email: string) {
  const q = query(collection(db, 'tickets'), where('email', '==', email));
  const snap = await getDocs(q);
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function uploadTicketFile(ticketId: string, file: File) {
  if (!['image/png', 'image/jpeg', 'application/pdf'].includes(file.type)) {
    throw new Error('Invalid file type');
  }
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('File too large');
  }

  const storageRef = ref(storage, `ticket-uploads/${ticketId}/${file.name}`);
  await uploadBytes(storageRef, file);
}
