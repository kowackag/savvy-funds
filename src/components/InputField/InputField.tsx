import { ChangeEventHandler, Ref } from "react";
import clx from "classnames";

type Props = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	name: string;
	error?: string;
	inputRef: Ref<HTMLInputElement>;
};

export const InputField = ({
	label,
	name,
	type = "text",
	value,
	error,
	onChange,
	inputRef,
	className,
}: Props) => {
	return (
		<div className={clx("relative pb-3 text-neutral500", className)}>
			<label className="mb-3 block text-l font-medium" htmlFor={name}>
				{label}
			</label>
			<input
				className="w-full rounded-[32px] border border-neutral30 bg-primary/5 px-6 py-3 text-s outline-none focus:border-neutral50 sm:bg-neutral00"
				type={type}
				id={name}
				name={name}
				value={value}
				ref={inputRef}
				onChange={onChange}
			/>
			{error && (
				<p className="absolute right-0 text-xs font-medium text-secondary02">
					{error}
				</p>
			)}
		</div>
	);
};
