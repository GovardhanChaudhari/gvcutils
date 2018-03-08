import _ from "underscore";
import ArrayUtils from "./ArrayUtils";

export default class ObjectUtils {

	static clone(obj) {
		return _.clone(obj)
	}

	static merge(src,dest){
		return _.extend(src,dest);
	}

	static printDetails(object){
		var output = "";
		for (var property in object) {
 		  output += property + ": " + object[property] + ",";
		}
		return output;
	}

	static isPrimitive(arg) {
  		var type = typeof arg;
  		return arg == null || (type != "object" && type != "function");
	}

	static removeKey(obj,key){
		var newObj = ObjectUtils.clone(obj);
		delete newObj[key];
		return newObj;
	}

	static removeKeys(obj,keys){
		return ArrayUtils.reduce(ObjectUtils.getObjectKeys(obj),function(newObject,key){
			if(!ArrayUtils.contains(keys,key)){
				newObject[key] = obj[key];
			}
			return newObject;
		},{});
	}

	static removeBlankProperties(obj){
		var properties = Object.keys(obj);
		return ArrayUtils.reduce(properties,function(newObject,property){
			// assuming values is of string type
			if(obj[property].length !== 0) {
				newObject[property] = obj[property];
			}
			return newObject
		},{});
	}

	static sortByKeys(obj){
		var filteredKeys = ArrayUtils.filter(ObjectUtils.getObjectKeys(obj), function (key) {
			return obj.hasOwnProperty(key);
		});

		filteredKeys.sort();

		return ArrayUtils.reduce(filteredKeys, function (sortedObject,key) {
			sortedObject[key] = obj[key];
			return sortedObject;
		},{});
	}

	static booleanToString(value){
		var newValue = value || false;
		return newValue.toString();
	}

	static stringToBoolean(value){
		return String(value).trim().toLowerCase() === "true";
	}

	static getObjectKeys(obj){
		return Object.keys(obj);
	}

	static getObjectKeyCount(obj){
		return ObjectUtils.getObjectKeys(obj).length;
	}

	static renameKey(obj,oldKey,newKey){
		var newObject = ObjectUtils.clone(obj);
		var val = newObject[oldKey];
		newObject = ObjectUtils.removeKey(newObject,oldKey);
		newObject[newKey] = val;
		return newObject;
	}

	static pick(object,keys){
		return _.pick(object,keys);
	}
	
	static assign (target, ...sources){
		return Object.assign(target, sources);
	}

};