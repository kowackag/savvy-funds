import * as z from "zod";

export const schema = z.object({
	firstName: z.string().min(3, { message: "nameAtLeast3Characters" }),
	lastName: z.string(),
	email: z.string().trim().email({ message: "invalidEmail" }),
	password: z
		.string()
		.trim()
		.min(8, { message: "passwordAtLeast8Characters" })
		.regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, {
			message: "passwordOnlyBothLetterNumber",
		}),
});
