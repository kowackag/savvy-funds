import { useContext } from "react";
import { AuthContext } from "./../../../context/AuthContext";
import { Dropdown } from "@components/Dropdown/Dropdown";
import { useTranslation } from "react-i18next";

export const Topbar = () => {
	const { i18n } = useTranslation();
	const context = useContext(AuthContext);
	const items = [
		{
			id: "pl",
			image: { url: "src/assets/icons/polish-flag.svg", alt: "Polish flag" },
		},
		{
			id: "en",
			image: {
				url: "src/assets/icons/great-britain-flag.svg",
				alt: "Great Britain flag",
			},
		},
	];

	const changeLanguage = (id: string) => {
		i18n.changeLanguage(id);
	};

	return (
		<div className="flex h-[84px] justify-end px-8 py-[18px] leading-[48px]">
			<div className="flex h-12 items-center gap-3">
				<p className="text-l font-medium text-neutral500">
					{`${context?.user?.firstName} ${context?.user?.lastName}`}
				</p>
				<Dropdown items={items} onSelect={changeLanguage} selected="en" />
			</div>
		</div>
	);
};
