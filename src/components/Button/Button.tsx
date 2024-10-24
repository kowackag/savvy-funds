import clx from "classnames";
import { ButtonHTMLAttributes } from "react";

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
	disabled = false,
	...props
}: Props) => {
	return (
		<button
			{...props}
			className={clx(
				"align-center inline-flex justify-center gap-3 rounded-full",
				className,
				{
					"bg-primary text-neutral00": variant === "primary",
					"border-primary bg-neutral00 text-primary": variant === "secondary",
					"px-6 py-3": size === "small",
					"px-8 py-4": size === "medium",
					"px-10 py-5": size === "large",
				},
			)}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
