import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": "/src",
			"@components": "/src/components",
			"@hooks": "/src/hooks",
			"@services": "/src/services",
			"@icons": "/src/assets/icons/*",
			"@images": "/src/assets/images/*",
		},
	},
});
