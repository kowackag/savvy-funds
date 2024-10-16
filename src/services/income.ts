import { firebaseDAL } from "./DAL/firebase";

//getAll, get, update, remove, add

export type IncomeType = {
  id: string;
  source: string;
  value: number;
  currency: string;
  data: Date;
};



const getAll = async () => {
   return firebaseDAL.getAll<{isSuccess: boolean}>('income')
};

const add = async () => {
  throw new Error("Function not implemented.");
};

export const incomeServices = { getAll, add };
