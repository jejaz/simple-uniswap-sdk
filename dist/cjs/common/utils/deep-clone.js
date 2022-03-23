"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = void 0;
/**
 * Deep clone object
 * @param object The object to clone
 */
function deepClone(object) {
    console.log('object ' + JSON.stringify(object));
    return JSON.parse(JSON.stringify(object));
}
exports.deepClone = deepClone;
