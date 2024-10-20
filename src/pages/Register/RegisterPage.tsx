import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterForm } from "./components/RegisterForm";

import { schema } from "./schema";

type FormInput = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export const RegisterPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormInput>({ resolver: zodResolver(schema) });

	const onSubmit: SubmitHandler<FormInput> = (data) => {
		console.log(data);
		reset();
	};

	return (
		<div className="gap-12 text-neutral500 lg:flex lg:items-center">
			<div className="rounded-xl sm:border sm:border-neutral30 sm:bg-primary/5 sm:px-8 sm:py-10 lg:w-1/2">
				<h2 className="mb-4 text-headline-3 font-semibold">
					Let’s Get Started!
				</h2>
				<p className="mb-8 text-m">
					Please Enter your Email Address to Start your Online Application
				</p>
				<hr className="mb-8 w-full border-dashed text-primary opacity-40"></hr>
				<RegisterForm
					onSubmit={handleSubmit(onSubmit)}
					register={register}
					errors={errors}
				/>
			</div>
			<div className="hidden lg:block lg:w-1/2 lg:max-w-md">
				<img
					src="/src/assets/images/auth.svg"
					alt="man looking at a picture with his avatar"
				/>
			</div>
		</div>
	);
};
