/**
 * Deep clone object
 * @param object The object to clone
 */
export function deepClone(object) {
    console.log('object ' + JSON.stringify(object));
    return JSON.parse(JSON.stringify(object));
}
