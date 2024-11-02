import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "./../config/firebase";

type UserData = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export const useRegister = () => {
	const [error, setError] = useState<string | null>(null);
	const [isPending, setIsPending] = useState<boolean>(false);

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

			const userRef = doc(db, "User", res.user.uid);

			setDoc(userRef, {
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				password: data.password,
				id: res.user.uid,
			});
			setError(null);
		} catch (error) {
			if (error instanceof FirebaseError) {
				if (error.code.includes("email-already-in-use")) {
					return setError("The account already exists for that email.");
				}

				if (error.code.includes("auth/weak-password")) {
					return setError("The password provided is too weak.");
				}
				setError("Some error during register. Try again later.");
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
