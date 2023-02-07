import { fibonanci, is_kaibun, is_palindrome } from "../code.mjs"

// test("1 returns 1", () => {
// 	expect(fibonanci(1)).toBe(1);
// })

describe("is_kaibun", () => {
	test("handles katakana", () => {
		// try {
			// const kaibunResult = await is_kaibun("トマト")
			return expect(is_kaibun("トマト")).resolves.toBeTruthy()
		// } catch {

		// }
	})

	describe("handles kanji by reading", () => {
		test("returning true for 新聞紙", async () => {
			const kaibunResult = await is_kaibun("新聞紙")
			expect(kaibunResult).toBeTruthy()
		})

		test("returning false for 財布", async () => {
			const kaibunResult = await is_kaibun("財布")
			expect(kaibunResult).toBeFalsy()
		})
	})
})

// describe("is_palindrome", () => {
// 	test("returns true for empty strings", () => {
// 		expect(is_palindrome("")).toBeTruthy()
// 	})

// 	test("returns true for single character strings", () => {
// 		expect(is_palindrome("b")).toBeTruthy()
// 	})

// 	test("returns true for two identical character strings", () => {
// 		expect(is_palindrome("cc")).toBeTruthy()
// 	})

// 	test("returns false for two different character strings", () => {
// 		expect(is_palindrome("de")).toBeFalsy()
// 	})

// 	test("returns true for longer strings", () => {
// 		expect(is_palindrome("stringnirts")).toBeFalsy()
// 	})
// })