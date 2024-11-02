import { useContext, useEffect, useState } from "react";
import { FirebaseError } from "firebase/app";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { auth, db } from "../config/firebase";
import { AuthContext } from "../context/AuthContext";

type UserData = {
	email: string;
	password: string;
};

export const useLogin = () => {
	const [error, setError] = useState<string | null>(null);
	const [isPending, setIsPending] = useState<boolean>(false);
	const context = useContext(AuthContext);

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

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				const docRef = doc(db, "User", user.uid);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists())
					context?.dispatch({ type: "LOGIN", payload: docSnap.data() });
			} else {
				context?.dispatch({ type: "LOGOUT" });
			}
		});
	}, []);

	return {
		loginUser,
		error,
		isPending,
	};
};
