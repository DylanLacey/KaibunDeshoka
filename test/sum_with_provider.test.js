import { is_kaibun } from "../code.mjs"

describe("is_kaibun", () => {
	describe("handles kanji", () => {
		test("returning true for 新聞紙", async () => {
			const kaibunResult = await is_kaibun("新聞紙")
			expect(kaibunResult).toBeTruthy()
		} )

		test("returning true for 悪い鉄柵が腐っているわ", async () => {
			const kaibunResult = await is_kaibun("悪い鉄柵が腐っているわ")
			expect(kaibunResult).toBeTruthy()
		} )

		test("returning true for 隅の間の御簾", async () => {
			const kaibunResult = await is_kaibun("隅の間の御簾")
			expect(kaibunResult).toBeTruthy()
		} )

		test("returning true for 照りて来つ西に真西に月照りて", async () => {
			const kaibunResult = await is_kaibun("照りて来つ西に真西に月照りて")
			expect(kaibunResult).toBeTruthy()
		} )

		test("returning true for 塩飛乱蝶舞、花落飄粉匳、匳粉飄落花、舞蝶乱飛塩", async () => {
			const kaibunResult = await is_kaibun("塩飛乱蝶舞花落飄粉匳匳粉飄落花舞蝶乱飛塩")
			expect(kaibunResult).toBeTruthy()
		} )

		//悪い鉄柵が腐っているわ
		//塩飛乱蝶舞、花落飄粉匳、匳粉飄落花、舞蝶乱飛塩
		//照りて来つ西に真西に月照りて
		//隅の間の御簾
		//折るな枝鶯低う妙（たえ）なるを ??
	})
	// test("handles katakana", () => {
	// 	return expect(is_kaibun("トマト")).resolves.toBeTruthy()
	// })

	// describe("handles kanji by reading", () => {
	// 	test("returning true for 新聞紙", async () => {
	// 		const kaibunResult = await is_kaibun("新聞紙")
	// 		expect(kaibunResult).toBeTruthy()
	// 	})

	// 	test("returning false for 財布", async () => {
	// 		const kaibunResult = await is_kaibun("財布")
	// 		expect(kaibunResult).toBeFalsy()
	// 	})
	// }) 
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