"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromAxios = void 0;
function fromAxios(error) {
    let type = 'OTHER';
    if (error.code == 'ECONNABORTED') {
        if (error.message.startsWith('timeout')) {
            type = 'TIMEOUT';
        }
        else {
            type = 'ABORTED';
        }
    }
    return { type, error };
}
exports.fromAxios = fromAxios;
//# sourceMappingURL=NetworkError.js.map