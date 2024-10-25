import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { schema } from "./schema";
import { LoginForm } from "./components/LoginForm";

type FormInput = {
	email: string;
	password: string;
};

export const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
    reset
	} = useForm<FormInput>({ resolver: zodResolver(schema) });

	const onSubmit: SubmitHandler<FormInput> = (data) => {
		console.log(data);
    reset()
	};

	return (
		<div className="gap-12 text-neutral500 lg:flex lg:items-center">
			<div className="rounded-xl sm:border sm:border-neutral30 sm:bg-primary/5 sm:px-8 sm:py-10 lg:w-1/2 min-w-[min]">
				<h2 className="mb-4 text-headline-3 font-semibold">Welcome Back!</h2>
				<p className="mb-8 text-m">Sign in to your account and join us.</p>
				<hr className="mb-8 w-full border-dashed text-primary opacity-40"></hr>
				<LoginForm onSubmit={handleSubmit(onSubmit)} register={register} errors={errors}/>
			</div>
			<div className="hidden lg:block lg:w-1/2 lg:max-w-lg">
				<img
					src="/src/assets/images/auth.svg"
					alt="man looking at a picture with his avatar"
				/>
			</div>
		</div>
	);
};
