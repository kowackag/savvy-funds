import clx from "classnames";
import { ReactNode } from "react";

export enum ButtonVariant {
	Primary = "primary",
	Secondary = "secondary",
}

export enum ButtonSize {
	Small = "small",
	Medium = "medium",
	Large = "large",
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: ButtonVariant;
	size?: ButtonSize;
};

export const Button = ({
	variant,
	className,
	children,
	size,
	type,
	disabled=false,
}: Props) => {
	return (
		<button
			className={clx(
				"align-center inline-flex justify-center gap-3 rounded-full",
				className,
				{
					"bg-primary text-neutral00": variant === "primary",
					"border-primary bg-neutral00 text-primary": variant === "secondary",
					"py-3 px-6": size === "small",
					"py-4 px-8": size === "medium",
					"py-5 px-10": size === "large",
				},
			)}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
