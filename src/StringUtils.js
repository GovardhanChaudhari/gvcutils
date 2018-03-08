import S from 'string';

export default class StringUtils {
  /**
   * @method capitalize - Static method to convert a string with
   * first letter in capital form.
   * @param {string} str - A string to be capitalized.
   * @return {string} - A string in capitalized form eg. 'Hello'.
   */
  static capitalize(str){
		return S(str).capitalize().s;
	}

	static escapeSpecialCharacters(str){
		return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	}

	static removeAllWhiteSpaces (str) {
		return str.replace(/\s+/g, '');
	}

	static startsWith (str,startWithString) {
		return str.indexOf(startWithString) == 0;
	}

	static prefix(prefixString,mainString,separator){
		var resultString = prefixString;
		if(separator){
			resultString = resultString + separator + mainString;
		}else{
			resultString = resultString + mainString;
		}
		return resultString;
	}

	static split (string, splitter) {
		return string.split(splitter);
	}

	static getFirstWorld (line, separator) {
		var words = StringUtils.split(line, separator);
		var firstWord = null;
		if (words.length > 0) {
			if (words.length >= 1) {
				firstWord = words[0];
			}
		}
		return firstWord;
	}
};
