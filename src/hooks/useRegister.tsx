import { FirebaseError } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { firebaseApp } from "./../config/firebase";

type UserData = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export const useRegister = () => {
	const [error, setError] = useState<string | null>(null);
	const [pending, setPending] = useState<boolean>(true);

	const auth = getAuth(firebaseApp);
	const registerUser = async (data: UserData) => {
		setPending(true);
		setError(null);
		try {
			const res = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password,
			);
			if (!res) throw new Error("Some error during register.");

			updateProfile(res.user, {
				displayName: `${data.firstName} ${data.lastName}`,
			});
			setPending(false);
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
				setPending(false);
			}
		}
	};
	return {
		registerUser,
		error,
		pending,
	};
};
