// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	modules: [
		"@nuxt/eslint",
		"@nuxt/image",
		"@nuxt/scripts",
		"@nuxt/test-utils",
		"@nuxt/ui",
		"@vueuse/nuxt",
		"@nuxthub/core"
	],

	css: ["~/assets/css/main.css"],
	hub: {
		database: true
	},
	// routeRules: {
	//   '/api/**': {
	//     cors: true
	//   }
	// }
})