import { useContext, useState } from "react";
import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
			if (!res) throw new Error("Some error during register.");

			if (context) {
				context?.dispatch({ type: "LOGIN", payload: res.user });
				localStorage.setItem("authUser", JSON.stringify(res.user));
			}
			setError(null);
		} catch (error) {
			if (error instanceof FirebaseError) {
				console.log(error.code);
				if (error.code.includes("invalid-credential")) {
					return setError("The credential used to authenticate are not valid.");
				}

				setError("Some error during loging. Try again later.");
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
