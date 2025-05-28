import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export async function getReferralCount(email: string) {
  const username = email.split('@')[0].replace(/\W/g, '');
  const q = query(collection(db, 'users'), where('refBy', '==', username));
  const snap = await getDocs(q);
  return snap.docs.length;
}
