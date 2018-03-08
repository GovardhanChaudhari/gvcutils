'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _string = require('string');

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringUtils = function () {
	function StringUtils() {
		_classCallCheck(this, StringUtils);
	}

	_createClass(StringUtils, null, [{
		key: 'capitalize',
		value: function capitalize(str) {
			return (0, _string2.default)(str).capitalize().s;
		}
	}, {
		key: 'escapeSpecialCharacters',
		value: function escapeSpecialCharacters(str) {
			return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
		}
	}, {
		key: 'removeAllWhiteSpaces',
		value: function removeAllWhiteSpaces(str) {
			return str.replace(/\s+/g, '');
		}
	}, {
		key: 'startsWith',
		value: function startsWith(str, startWithString) {
			return str.indexOf(startWithString) == 0;
		}
	}, {
		key: 'prefix',
		value: function prefix(prefixString, mainString, separator) {
			var resultString = prefixString;
			if (separator) {
				resultString = resultString + separator + mainString;
			} else {
				resultString = resultString + mainString;
			}
			return resultString;
		}
	}, {
		key: 'split',
		value: function split(string, splitter) {
			return string.split(splitter);
		}
	}, {
		key: 'getFirstWorld',
		value: function getFirstWorld(line, separator) {
			var words = StringUtils.split(line, separator);
			var firstWord = null;
			if (words.length > 0) {
				if (words.length >= 1) {
					firstWord = words[0];
				}
			}
			return firstWord;
		}
	}]);

	return StringUtils;
}();

exports.default = StringUtils;
;