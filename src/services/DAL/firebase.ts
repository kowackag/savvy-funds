import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from "../../config/firebase";

const getAll = async <T>(collectionName: string): Promise<T> => {
  const incomeCollection = collection(db, collectionName);
  const querySnapshot = await getDocs(incomeCollection);
  return querySnapshot.docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
};

export const firebaseDAL = {
  getAll,
};
