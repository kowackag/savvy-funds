import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export type IncomeType = {
  id: string;
  source: string;
  value: number;
  currency: string;
  data: Date;
};

const getAll = async (): Promise<{
  isSuccess: boolean;
  income: IncomeType[];
}> => {
  try {
    const incomeCollection = collection(db, "income");
    const querySnapshot = await getDocs(incomeCollection);
    const income = querySnapshot.docs.map((item) => {
      return { ...item.data(), id: item.id };
    });
    return {
      isSuccess: true,
      income: income as IncomeType[],
    };
  } catch (error) {
    return {
      isSuccess: false,
      income: [],
    };
  }
};

const addIncome = async () => {};

export const incomeServices = { getAll, addIncome };
