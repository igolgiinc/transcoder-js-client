"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Either_1 = require("fp-ts/lib/Either");
async function loadChannelsGet(axios) {
    try {
        const resp = await axios.request({
            url: '/json/control.php',
            params: {
                fName: 'LoadChannels',
            },
        });
        const json = resp.data;
        return Either_1.right(json);
    }
    catch (e) {
        return Either_1.left(e);
    }
}
exports.default = loadChannelsGet;
//# sourceMappingURL=loadChannelsGet.js.map