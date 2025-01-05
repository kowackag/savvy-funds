import { MouseEventHandler, ReactNode } from "react";

import { Button, ButtonSize, ButtonVariant } from "@components/Button/Button";
import { AddIcon } from "@components/icons/Add";

type Props = {
	title: string;
	children: ReactNode;
	buttonTitle?: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
};
export const PageContainer = ({
	title,
	children,
	buttonTitle,
	onClick,
}: Props) => {
	return (
		<section className="px-5 py-6 lg:px-6 lg:py-9 ">
			<div className="flex items-center justify-between pb-6 capitalize lg:pb-9">
				<h2 className=" text-headline-5 text-neutral500 lg:text-headline-3">
					{title}
				</h2>
				<Button
					onClick={onClick}
					variant={ButtonVariant.Primary}
					size={ButtonSize.Medium}
					className="flex items-center gap-3 px-4"
				>
					<AddIcon className="h-5 w-5" />
					<span className="hidden text-headline-6 md:block">{buttonTitle}</span>
				</Button>
			</div>
			<div>{children}</div>
		</section>
	);
};
