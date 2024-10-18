import { useEffect, useState } from "react";
import { IncomeType, incomeServices } from "@services/income";

export const Income = () => {
	const [allIncome, setAllIncome] = useState<IncomeType[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getIncome = async () => {
			try {
				const income = await incomeServices.getAll();
				setAllIncome(income);
			} catch (e) {
				setError("Some err during fetching data");
			}
		};
		getIncome();
	}, []);

	if (error) return <p>{error}</p>;
	return (
		<section>
			<h1>Income</h1>
			{allIncome.map((el) => (
				<p key={el.id}>{`${el.source}: ${el.value} ${el.currency}`}</p>
			))}
		</section>
	);
};
