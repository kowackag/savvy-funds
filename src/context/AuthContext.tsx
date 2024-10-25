import { User } from "firebase/auth";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

type AuthAction =
	| { type: "LOGIN"; payload: User }
	| { type: "LOGOUT" };

type AuthContextValue = {
	user: User | null;
	dispatch: Dispatch<AuthAction>;
};

type AuthState = {
	user: User | null;
};

export const authReducer = (state: AuthState, action: AuthAction) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				user: action.payload,
			};
		case "LOGOUT":
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
};

export const AuthContext = createContext<AuthContextValue>({
	user: null,
	dispatch: () => undefined,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
