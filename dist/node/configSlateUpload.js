"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configSlateUpload = void 0;
const NetworkError_1 = require("./NetworkError");
const Either_1 = require("fp-ts/lib/Either");
async function configSlateUpload(axios, formData) {
    try {
        axios.interceptors.request.use(request => {
            console.log('Starting Request', JSON.stringify(request, null, 2));
            return request;
        });
        const resp = await axios.post('/json/slate.php', formData, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
            },
        });
        return Either_1.right(resp.data);
    }
    catch (e) {
        return Either_1.left(NetworkError_1.fromAxios(e));
    }
}
exports.configSlateUpload = configSlateUpload;
//# sourceMappingURL=configSlateUpload.js.map