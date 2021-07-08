"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compactMap = exports.isNotEmpty = exports.toDictUsingUniqueKey = void 0;
const toDictUsingUniqueKey = function (ar, key) {
    const out = {};
    ar.forEach((x) => out[key(x)] = x);
    return out;
};
exports.toDictUsingUniqueKey = toDictUsingUniqueKey;
function isNotEmpty(value) {
    return value !== undefined && value !== null;
}
exports.isNotEmpty = isNotEmpty;
const compactMap = function (ar, f) {
    return ar
        .map(f)
        .filter(isNotEmpty);
};
exports.compactMap = compactMap;
//# sourceMappingURL=utils.js.map