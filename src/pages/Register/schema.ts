import * as z from "zod";

export const schema = z.object({
	firstName: z
		.string()
		.min(3, { message: "Name must contain at least 3 characters" }),
	lastName: z.string(),
	email: z.string().trim().email({ message: "invalidEmail" }),
	password: z
		.string()
		.trim()
		.min(8, { message: "Password must contain at least 8 characters" })
		.regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, {
			message: "Password must contain only and both a letter and a number",
		}),
});
