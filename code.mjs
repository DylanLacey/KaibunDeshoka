import Kuroshiro from "kuroshiro";
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji"; 

export const is_kaibun = async (phrase) => {
	const kuroshiro = new Kuroshiro();
	await kuroshiro.init(new KuromojiAnalyzer());

	const hiraganaPhrase = await kuroshiro.convert(phrase)
	return is_palindrome(hiraganaPhrase);
	return is_palindrome(phrase);
}

export function is_palindrome(phrase) {
	// console.log(` Testing phrase ${phrase}: ST ${phrase.at(0)} FN ${phrase.at(-1)}`)
	if (phrase.length < 2) { return true }
	else {	
		if (phrase.at(0) == phrase.at(-1)) { return is_palindrome(phrase.slice(1, -1))} 
		else { return false }
	}
}