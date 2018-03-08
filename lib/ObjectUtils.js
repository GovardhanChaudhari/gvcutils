"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _ArrayUtils = require("./ArrayUtils");

var _ArrayUtils2 = _interopRequireDefault(_ArrayUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectUtils = function () {
	function ObjectUtils() {
		_classCallCheck(this, ObjectUtils);
	}

	_createClass(ObjectUtils, null, [{
		key: "clone",
		value: function clone(obj) {
			return _underscore2.default.clone(obj);
		}
	}, {
		key: "merge",
		value: function merge(src, dest) {
			return _underscore2.default.extend(src, dest);
		}
	}, {
		key: "printDetails",
		value: function printDetails(object) {
			var output = "";
			for (var property in object) {
				output += property + ": " + object[property] + ",";
			}
			return output;
		}
	}, {
		key: "isPrimitive",
		value: function isPrimitive(arg) {
			var type = typeof arg === "undefined" ? "undefined" : _typeof(arg);
			return arg == null || type != "object" && type != "function";
		}
	}, {
		key: "removeKey",
		value: function removeKey(obj, key) {
			var newObj = ObjectUtils.clone(obj);
			delete newObj[key];
			return newObj;
		}
	}, {
		key: "removeKeys",
		value: function removeKeys(obj, keys) {
			return _ArrayUtils2.default.reduce(ObjectUtils.getObjectKeys(obj), function (newObject, key) {
				if (!_ArrayUtils2.default.contains(keys, key)) {
					newObject[key] = obj[key];
				}
				return newObject;
			}, {});
		}
	}, {
		key: "removeBlankProperties",
		value: function removeBlankProperties(obj) {
			var properties = Object.keys(obj);
			return _ArrayUtils2.default.reduce(properties, function (newObject, property) {
				// assuming values is of string type
				if (obj[property].length !== 0) {
					newObject[property] = obj[property];
				}
				return newObject;
			}, {});
		}
	}, {
		key: "sortByKeys",
		value: function sortByKeys(obj) {
			var filteredKeys = _ArrayUtils2.default.filter(ObjectUtils.getObjectKeys(obj), function (key) {
				return obj.hasOwnProperty(key);
			});

			filteredKeys.sort();

			return _ArrayUtils2.default.reduce(filteredKeys, function (sortedObject, key) {
				sortedObject[key] = obj[key];
				return sortedObject;
			}, {});
		}
	}, {
		key: "booleanToString",
		value: function booleanToString(value) {
			var newValue = value || false;
			return newValue.toString();
		}
	}, {
		key: "stringToBoolean",
		value: function stringToBoolean(value) {
			return String(value).trim().toLowerCase() === "true";
		}
	}, {
		key: "getObjectKeys",
		value: function getObjectKeys(obj) {
			return Object.keys(obj);
		}
	}, {
		key: "getObjectKeyCount",
		value: function getObjectKeyCount(obj) {
			return ObjectUtils.getObjectKeys(obj).length;
		}
	}, {
		key: "renameKey",
		value: function renameKey(obj, oldKey, newKey) {
			var newObject = ObjectUtils.clone(obj);
			var val = newObject[oldKey];
			newObject = ObjectUtils.removeKey(newObject, oldKey);
			newObject[newKey] = val;
			return newObject;
		}
	}, {
		key: "pick",
		value: function pick(object, keys) {
			return _underscore2.default.pick(object, keys);
		}
	}, {
		key: "assign",
		value: function assign(target) {
			for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				sources[_key - 1] = arguments[_key];
			}

			return Object.assign(target, sources);
		}
	}]);

	return ObjectUtils;
}();

exports.default = ObjectUtils;
;