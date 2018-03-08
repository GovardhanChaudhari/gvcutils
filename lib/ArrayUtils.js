"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _ObjectUtils = require("./ObjectUtils");

var _ObjectUtils2 = _interopRequireDefault(_ObjectUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrayUtils = function () {
    function ArrayUtils() {
        _classCallCheck(this, ArrayUtils);
    }

    _createClass(ArrayUtils, null, [{
        key: "find",
        value: function find(array, callback) {
            return _underscore2.default.find(array, callback);
        }
    }, {
        key: "findElementByPropertyName",
        value: function findElementByPropertyName(array, propertyName) {
            // assuming array is array of objects
            return ArrayUtils.find(array, function (elem) {
                return elem[propertyName] !== undefined;
            });
        }
    }, {
        key: "containsProperty",
        value: function containsProperty(array, propertyName) {
            // assuming array is array of objects
            return ArrayUtils.findElementByPropertyName(array, propertyName) !== undefined;
        }
    }, {
        key: "reject",
        value: function reject(array, callback) {
            return _underscore2.default.reject(array, callback);
        }
    }, {
        key: "map",
        value: function map(array, callback) {
            return _underscore2.default.map(array, callback);
        }
    }, {
        key: "reduce",
        value: function reduce(array, func, initialState) {
            return _underscore2.default.reduce(array, func, initialState);
        }
    }, {
        key: "clone",
        value: function clone(array) {
            return ArrayUtils.map(array, _underscore2.default.clone);
        }
    }, {
        key: "each",
        value: function each(array, callback) {
            return _underscore2.default.each(array, callback);
        }
    }, {
        key: "contains",
        value: function contains(array, value) {
            return _underscore2.default.contains(array, value);
        }
    }, {
        key: "every",
        value: function every(array, predicate, context) {
            return _underscore2.default.every(array, predicate, context);
        }
    }, {
        key: "removeElementByIndex",
        value: function removeElementByIndex(array, index) {
            var newArray = ArrayUtils.clone(array);
            newArray.splice(index, 1);
            return newArray;
        }
    }, {
        key: "removeElementByPropertyNameAndValue",
        value: function removeElementByPropertyNameAndValue(array, propertyName, propertyValue) {
            return ArrayUtils.reject(array, function (elm) {
                return elm[propertyName] === propertyValue;
            });
        }
    }, {
        key: "removeObject",
        value: function removeObject(array, object) {
            var index = _underscore2.default.indexOf(array, object);
            return ArrayUtils.removeElementByIndex(array, index);
        }
    }, {
        key: "removeElementByPropertyNameAndValues",
        value: function removeElementByPropertyNameAndValues(array, propertyName, propertyValues) {
            var newArray = ArrayUtils.clone(array);
            ArrayUtils.each(propertyValues, function (propertyValue) {
                newArray = ArrayUtils.removeElementByPropertyNameAndValue(newArray, propertyName, propertyValue);
            });
            return newArray;
        }
    }, {
        key: "notIn",
        value: function notIn(array, values) {
            return ArrayUtils.every(values, function (value) {
                return !ArrayUtils.contains(array, value);
            });
        }
    }, {
        key: "removeKey",
        value: function removeKey(array, name) {
            return ArrayUtils.map(array, function (elem) {
                return _ObjectUtils2.default.removeKey(elem, name);
            });
        }
    }, {
        key: "removeElementByPropertyName",
        value: function removeElementByPropertyName(array, name) {
            return ArrayUtils.reject(array, function (elem) {
                return elem[name] !== undefined;
            });
        }
    }, {
        key: "sum",
        value: function sum(array, propertyName, propertyType) {
            var sum = ArrayUtils.reduce(array, function (total, elem) {
                if (elem[propertyName] && elem[propertyName].trim().length > 0) {
                    if (typeof elem[propertyName] === "string") {
                        //debugger;
                        //console.log("found elem string type ");
                        if (elem[propertyName].trim().length > 0) {
                            if (propertyType === "int") {
                                total += parseInt(elem[propertyName]);
                            } else if (propertyType === "float") {
                                total += parseFloat(elem[propertyName]);
                            } else {
                                total += elem[propertyName];
                            }
                        }
                    } else {
                        //console.log("elem is not string");
                        total += elem[propertyName];
                    }
                }
                return total;
            }, 0);
            return sum;
        }
    }, {
        key: "findElementByPropertyNameAndValue",
        value: function findElementByPropertyNameAndValue(array, propertyName, propertyValue) {
            // assuming array is array of objects
            return ArrayUtils.find(array, function (elem) {
                return elem[propertyName] === propertyValue;
            });
        }
    }, {
        key: "findElementByPropertyName",
        value: function findElementByPropertyName(array, propertyName) {
            // assuming array is array of objects
            return ArrayUtils.find(array, function (elem) {
                return elem[propertyName] !== undefined;
            });
        }
    }, {
        key: "findByMaxKeys",
        value: function findByMaxKeys(array) {
            var maxKeyLengthObj = _underscore2.default.max(array, function (elem) {
                return _ObjectUtils2.default.getObjectKeyCount(elem);
            });
            var maxKeyLength = _ObjectUtils2.default.getObjectKeyCount(maxKeyLengthObj);
            console.log("found max len : " + maxKeyLength);
            return ArrayUtils.find(array, function (elem) {
                return _ObjectUtils2.default.getObjectKeyCount(elem) === maxKeyLength;
            });
        }
    }, {
        key: "findAllUniqueKeys",
        value: function findAllUniqueKeys(array) {
            // assuming array is an array of objects
            return ArrayUtils.reduce(array, function (uniqueKeys, elem) {
                var keys = _ObjectUtils2.default.getObjectKeys(elem);
                ArrayUtils.each(keys, function (key) {
                    if (!ArrayUtils.contains(uniqueKeys, key)) {
                        uniqueKeys.push(key);
                    }
                });
                return uniqueKeys;
            }, []);
        }
    }, {
        key: "filter",
        value: function filter(array, predicate, context) {
            return _underscore2.default.filter(array, predicate, context);
        }
    }]);

    return ArrayUtils;
}();

exports.default = ArrayUtils;
;