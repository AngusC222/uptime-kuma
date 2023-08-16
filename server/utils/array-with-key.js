/**
 * An object that can be used as an array with a key
 * Like PHP's array
 */
class ArrayWithKey {
    __stack = [];

    /**
     *
     */
    constructor() {

    }

    /**
     * @param key
     * @param value
     */
    push(key, value) {
        this[key] = value;
        this.__stack.push(key);
    }

    /**
     *
     */
    pop() {
        let key = this.__stack.pop();
        let prop = this[key];
        delete this[key];
        return prop;
    }

    /**
     *
     */
    getLastKey() {
        return this.__stack[this.__stack.length - 1];
    }

    /**
     *
     */
    shift() {
        let key = this.__stack.shift();
        let value = this[key];
        delete this[key];
        return {
            key,
            value,
        };
    }

    /**
     *
     */
    length() {
        return this.__stack.length;
    }
}

module.exports = {
    ArrayWithKey
};
