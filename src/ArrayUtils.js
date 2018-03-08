import _ from "underscore";
import ObjectUtils from "./ObjectUtils";

export default class ArrayUtils {

    static find(array, callback) {
        return _.find(array, callback);
    }

    static findElementByPropertyName(array, propertyName) {
        // assuming array is array of objects
        return ArrayUtils.find(array, function (elem) {
            return elem[propertyName] !== undefined
        });
    }

    static containsProperty(array, propertyName) {
        // assuming array is array of objects
        return ArrayUtils.findElementByPropertyName(array, propertyName) !== undefined;
    }

    static reject(array, callback) {
        return _.reject(array, callback);
    }

    static map(array, callback) {
        return _.map(array, callback);
    }

    static reduce(array, func, initialState) {
        return _.reduce(array, func, initialState);
    }

    static clone(array) {
        return ArrayUtils.map(array, _.clone);
    }

    static  each(array, callback) {
        return _.each(array, callback);
    }

    static contains(array, value) {
        return _.contains(array, value);
    }

    static every(array, predicate, context) {
        return _.every(array, predicate, context);
    }

    static removeElementByIndex(array, index) {
        var newArray = ArrayUtils.clone(array);
        newArray.splice(index, 1);
        return newArray;
    }

    static removeElementByPropertyNameAndValue(array, propertyName, propertyValue) {
        return ArrayUtils.reject(array, function (elm) {
            return elm[propertyName] === propertyValue;
        });
    }

    static removeObject(array, object) {
        var index = _.indexOf(array, object);
        return ArrayUtils.removeElementByIndex(array, index);
    }


    static removeElementByPropertyNameAndValues(array, propertyName, propertyValues) {
        var newArray = ArrayUtils.clone(array);
        ArrayUtils.each(propertyValues, function (propertyValue) {
            newArray = ArrayUtils.removeElementByPropertyNameAndValue(newArray, propertyName, propertyValue);
        });
        return newArray;
    }


    static notIn(array, values) {
        return ArrayUtils.every(values, function (value) {
            return !ArrayUtils.contains(array, value);
        });
    }


    static removeKey(array, name) {
        return ArrayUtils.map(array, function (elem) {
            return ObjectUtils.removeKey(elem, name);
        });
    }

    static removeElementByPropertyName(array, name) {
        return ArrayUtils.reject(array, function (elem) {
            return elem[name] !== undefined;
        });
    }

    static sum(array, propertyName, propertyType) {
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


    static findElementByPropertyNameAndValue(array, propertyName, propertyValue) {
        // assuming array is array of objects
        return ArrayUtils.find(array, function (elem) {
            return elem[propertyName] === propertyValue;
        });
    }

    static findElementByPropertyName(array, propertyName) {
        // assuming array is array of objects
        return ArrayUtils.find(array, function (elem) {
            return elem[propertyName] !== undefined
        });
    }


    static findByMaxKeys(array) {
        var maxKeyLengthObj = _.max(array, function (elem) {
            return ObjectUtils.getObjectKeyCount(elem);
        });
        var maxKeyLength = ObjectUtils.getObjectKeyCount(maxKeyLengthObj);
        console.log("found max len : " + maxKeyLength);
        return ArrayUtils.find(array, function (elem) {
            return ObjectUtils.getObjectKeyCount(elem) === maxKeyLength
        });
    }

    static findAllUniqueKeys(array) {
        // assuming array is an array of objects
        return ArrayUtils.reduce(array, function (uniqueKeys, elem) {
            var keys = ObjectUtils.getObjectKeys(elem);
            ArrayUtils.each(keys, function (key) {
                if (!ArrayUtils.contains(uniqueKeys, key)) {
                    uniqueKeys.push(key);
                }
            });
            return uniqueKeys;
        }, []);
    }


    static filter(array, predicate, context) {
        return _.filter(array, predicate, context);
    }
};