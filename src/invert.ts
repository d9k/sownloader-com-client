/** https://github.com/jashkenas/underscore/blob/master/modules/invert.js */
export default function invert(obj: object): object {
  var result = {};
  var _keys = Object.keys(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    const key = _keys[i];
    // @ts-ignore key implicitly has any type
    const value: any = obj[key];
    // @ts-ignore key implicitly has any type
    result[value] = key;
  }
  return result;
}
