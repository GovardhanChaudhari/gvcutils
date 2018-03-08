export default class JsonUtils {

    static parse(str) {
        return JSON.parse(str);
    }

    static stringify(data) {
        return JSON.stringify(data);
    }
}