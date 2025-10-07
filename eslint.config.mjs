// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
	rules: {
		"no-unused-vars": "error",
		"no-undef": "error",
		"indent": ["error", "tab"],
		"quotes": ["error", "double"],
		"semi": ["error", "never"],
		"@typescript-eslint/no-explicit-any": "off",
		"vue/no-parsing-error" : "off",
		"vue/no-multiple-template-root": "off"
	}
})
