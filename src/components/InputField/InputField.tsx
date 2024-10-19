import { ChangeEventHandler } from "react";
import clx from "classnames";

type Props = {
	label: string;
	name: string;
	type: HTMLInputElement["type"];
	value: string | number;
	error?: string;
	onChange: ChangeEventHandler;
	className?: string;
};

export const InputField = ({
	label,
	name,
	type = "text",
	value,
	error,
	onChange,
	className,
}: Props) => {
	return (
		<div className={clx("relative pb-3 text-neutral500", className)}>
			<label className="mb-4 text-l font-medium" htmlFor={name}>
				{label}
			</label>
			<input
				className="rounded-[32px] border border-neutral30 bg-primary/5 px-6 py-3 text-s sm:bg-neutral00"
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
			/>
			{error && (
				<p className="absolute right-0 text-s italic text-secondary02">
					{error}
				</p>
			)}
		</div>
	);
};
