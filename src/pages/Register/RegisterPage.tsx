import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

import { RegisterForm } from "./components/RegisterForm";

import { schema } from "./schema";
import { useRegister } from "@hooks/useRegister";

type FormInput = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export const RegisterPage = () => {
	const { error, isPending, registerUser } = useRegister();
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInput>({ resolver: zodResolver(schema) });

	const onSubmit: SubmitHandler<FormInput> = async (data) => {
		await registerUser(data);
	};

	return (
		<div className="gap-12 text-neutral500 lg:flex lg:items-center">
			<div className="relative rounded-xl sm:border sm:border-neutral30 sm:bg-primary/5 sm:px-8 sm:py-10 lg:w-1/2">
				<h2 className="mb-4 text-headline-3 font-semibold">
					{t("getStarted")}
				</h2>
				<p className="mb-8 text-m">{t("getStartedDescription")}</p>
				<hr className="mb-8 w-full border-dashed text-primary opacity-40"></hr>
				<RegisterForm
					onSubmit={handleSubmit(onSubmit)}
					register={register}
					errors={errors}
					isPending={isPending}
				/>
				{error && (
					<p className="absolute pt-2 text-xs font-medium text-secondary02">
						{error}
					</p>
				)}
			</div>
			<div className="hidden lg:block lg:w-1/2 lg:max-w-md">
				<img
					src="/src/assets/images/auth.svg"
					alt="man looking at a piece of paper with his avatar"
				/>
			</div>
		</div>
	);
};
