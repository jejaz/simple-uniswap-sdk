/**
 * Deep clone object
 * @param object The object to clone
 */
export function deepClone(object) {
    console.log('object ' + object);
    return JSON.parse(JSON.stringify(object));
}
