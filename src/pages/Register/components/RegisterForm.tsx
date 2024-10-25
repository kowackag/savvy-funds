import { FormEventHandler } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Link } from "react-router-dom";

import { Button, ButtonSize, ButtonVariant } from "@components/Button/Button";
import { InputField } from "@components/InputField/InputField";

import { Paths } from "./../../../paths";

type RegisterFieldsTypes = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

type Props = {
	onSubmit: FormEventHandler;
	errors?: FieldErrors<RegisterFieldsTypes>;
	register: UseFormRegister<RegisterFieldsTypes>;
	isPending: boolean;
};
export const RegisterForm = ({
	register,
	onSubmit,
	errors,
	isPending,
}: Props) => {
	const {
		name: firstNameInputName,
		onChange: onFirstNameChange,
		ref: firstNameInputRef,
	} = register("firstName");
	const {
		name: lastNameInputName,
		onChange: onLastNameChange,
		ref: lastNameInputRef,
	} = register("lastName");
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
			<div className="flex flex-col justify-stretch gap-5 md:flex-row">
				<InputField
					className="w-full"
					onChange={onFirstNameChange}
					name={firstNameInputName}
					label="First Name"
					error={errors?.firstName?.message}
					inputRef={firstNameInputRef}
				/>
				<InputField
					className="w-full"
					onChange={onLastNameChange}
					name={lastNameInputName}
					label="Last Name"
					error={errors?.lastName?.message}
					inputRef={lastNameInputRef}
				/>
			</div>
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
				disabled={isPending}
			>
				{isPending ? "loading..." : "Sign Up"}
			</Button>
			<hr className="w-full border-dashed text-primary opacity-40"></hr>
			<p className="text-s">
				Have an account?{" "}
				<Link to={Paths.LOGIN} className="font-semibold text-primary">
					Sign In
				</Link>
			</p>
		</form>
	);
};
