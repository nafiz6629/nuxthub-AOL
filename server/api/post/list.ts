import { eq } from "drizzle-orm"

export default eventHandler(async (event) => {

	// List todos for the current user
	const data: any = await useDB().select().from(tables.post).all()

	return data
})

// export default defineEventHandler(async (event) => {
// 	const config = useRuntimeConfig()
// 	const body = await readBody(event)
// 	const headers = getRequestHeaders(event)
// 	const company_code: any = headers.company_code
// 	try {

// 		const data: any = await $fetch(config.apiUrl + "developer/menu-setting/list", {
// 			headers: {
// 				companycode: company_code
// 			},
// 			method: "POST",
// 			body: body
// 		})

// 		return data
// 	} catch (error) {
// 		return {
// 			code: 500,
// 			status: 'failed',
// 			message: 'Internal Server Error',
// 			data: {}
// 		}
// 	}
// })