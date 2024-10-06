// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
	semi: true,
	singleQuote: false,
	trailingComma: "all",
	printWidth: 80,
	useTabs: true,
	plugins: ["prettier-plugin-tailwindcss"],
	tailwindConfig: "./tailwind.config.ts",
};

export default config;
