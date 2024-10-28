import { useContext, useState } from "react";
import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from "react-i18next";

import { firebaseApp } from "../config/firebase";
import { AuthContext } from "../context/AuthContext";

type UserData = {
	email: string;
	password: string;
};

export const useLogin = () => {
	const [error, setError] = useState<string | null>(null);
	const [isPending, setIsPending] = useState<boolean>(false);
	const context = useContext(AuthContext);

	const { t } = useTranslation();

	const auth = getAuth(firebaseApp);
	const loginUser = async (data: UserData) => {
		setIsPending(true);
		setError(null);
		try {
			const res = await signInWithEmailAndPassword(
				auth,
				data.email,
				data.password,
			);
			if (!res) throw new Error("someErrorLoging");

			if (context) {
				context?.dispatch({ type: "LOGIN", payload: res.user });
				localStorage.setItem("authUser", JSON.stringify(res.user));
			}
			setError(null);
		} catch (error) {
			if (error instanceof FirebaseError) {
				if (error.code.includes("invalid-credential")) {
					return setError(t("invalidCredential"));
				}

				setError(t("someErrorLoging"));
			}
		} finally {
			setIsPending(false);
		}
	};
	return {
		loginUser,
		error,
		isPending,
	};
};
