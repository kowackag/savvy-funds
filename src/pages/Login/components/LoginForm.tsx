import { FormEventHandler } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Link } from "react-router-dom";

import { Button, ButtonSize, ButtonVariant } from "@components/Button/Button";
import { InputField } from "@components/InputField/InputField";

import { Paths } from "./../../../paths";

type LoginFieldsTypes = {
	email: string;
	password: string;
};

type Props = {
	onSubmit: FormEventHandler;
	errors?: FieldErrors<LoginFieldsTypes>;
	register: UseFormRegister<LoginFieldsTypes>;
	isPending: boolean;
	loginUser: (data: LoginFieldsTypes) => void; // only for loging to test account
};
export const LoginForm = ({
	register,
	onSubmit,
	errors,
	isPending,
	loginUser,
}: Props) => {
	const {
		name: emailInputName,
		onChange: onEmailChange,
		ref: emailInputRef,
	} = register("email");
	const {
		name: passwordInputName,
		onChange: onPasswordChange,
		ref: passwordInputRef,
	} = register("password");

	return (
		<form onSubmit={onSubmit} className="flex flex-col gap-5">
			<InputField
				onChange={onEmailChange}
				name={emailInputName}
				label="Enter Your Email"
				error={errors?.email?.message}
				type="email"
				inputRef={emailInputRef}
			/>
			<div>
				<InputField
					onChange={onPasswordChange}
					name={passwordInputName}
					label="Enter Your Password"
					error={errors?.password?.message}
					inputRef={passwordInputRef}
					type="password"
				/>
			</div>
			<Button
				variant={ButtonVariant.Primary}
				size={ButtonSize.Small}
				className="disabled:bg-primary/90 sm:order-2"
				type="submit"
			>
				{isPending ? "loading..." : "Sign In"}
			</Button>
			<hr className="w-full border-dashed text-primary opacity-40"></hr>
			<p className="text-s">
				Don’t have an account?{" "}
				<Link to={Paths.REGISTER} className="font-semibold text-primary">
					Signup
				</Link>
			</p>
			<Button
				variant={ButtonVariant.Secondary}
				size={ButtonSize.Small}
				className="border-2 border-primary disabled:bg-primary/90 sm:order-2"
				type="button"
				onClick={() =>
					loginUser({
						email: "gosia_kow@gazeta.pl",
						password: "GosiaTest123",
					})
				}
			>
				{isPending ? "loading..." : "Sign In one click to test account"}
			</Button>
		</form>
	);
};
