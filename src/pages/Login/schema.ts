import * as z from "zod";

export const schema = z.object({
	email: z.string().trim().email({ message: "invalidEmail" }),
	password: z.string().trim().min(8, { message: "invalidPassword" }),
});
