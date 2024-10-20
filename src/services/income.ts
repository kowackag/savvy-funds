import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export type IncomeType = {
	id: string;
	source: string;
	value: number;
	currency: string;
	data: Date;
};
const get = async () => {
	throw new Error("Function not implemented.");
};

const getAll = async (): Promise<IncomeType[]> => {
	const incomeCollection = collection(db, "income");
	const querySnapshot = await getDocs(incomeCollection);
	return querySnapshot.docs.map(
		(item) =>
			({
				...item.data(),
				id: item.id,
			}) as IncomeType,
	);
};

const add = async () => {
	throw new Error("Function not implemented.");
};

const update = async () => {
	throw new Error("Function not implemented.");
};

const remove = async () => {
	throw new Error("Function not implemented.");
};

export const incomeServices = { get, getAll, add, update, remove };
