import { useContext, useState } from "react";
import { FirebaseError } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	updateProfile,
} from "firebase/auth";

import { firebaseApp } from "./../config/firebase";
import { AuthContext } from "../../src/context/AuthContext";
import { useTranslation } from "react-i18next";

type UserData = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export const useRegister = () => {
	const [error, setError] = useState<string | null>(null);
	const [isPending, setIsPending] = useState<boolean>(false);
	const context = useContext(AuthContext);

	const { t } = useTranslation();

	const auth = getAuth(firebaseApp);
	const registerUser = async (data: UserData) => {
		setIsPending(true);
		setError(null);
		try {
			const res = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password,
			);
			if (!res) throw new Error("Some error during register.");

			await updateProfile(res.user, {
				displayName: `${data.firstName} ${data.lastName}`,
			});

			if (context) {
				context?.dispatch({ type: "LOGIN", payload: res.user });
				localStorage.setItem("authUser", JSON.stringify(res.user));
			}
			setError(null);
		} catch (error) {
			if (error instanceof FirebaseError) {
				if (error.code.includes("email-already-in-use")) {
					return setError(t("emailInUse"));
				}

				if (error.code.includes("auth/weak-password")) {
					return setError(t("weakPassword"));
				}
				setError(t("someErrorRegister"));
			}
		} finally {
			setIsPending(false);
		}
	};
	return {
		registerUser,
		error,
		isPending,
	};
};
