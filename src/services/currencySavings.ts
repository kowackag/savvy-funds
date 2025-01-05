import { collection, getDocs, query, Timestamp, where } from "firebase/firestore";
import { db } from "../config/firebase";

export type CurrencyType = {
	id: string;
	currency: string;
	amount: number;
	baseCurrency: string;
	exchangeRate: number;
	date: Timestamp;
};

const getAll = async (user: string) => {
	const currencyCollection = collection(db, "currency");
	const queryCurrency = query(currencyCollection, where("userId", "==", user));
	const querySnapshot = await getDocs(queryCurrency);

	return querySnapshot.docs.map((item) => ({
		...item.data(),
		id: item.id,
	})) as CurrencyType[];
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

export const currencySavings = { getAll, add, update, remove };
