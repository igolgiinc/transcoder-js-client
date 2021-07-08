"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Either_1 = require("fp-ts/lib/Either");
const NetworkError_1 = require("./NetworkError");
async function start(axios, channelId, configFilename) {
    try {
        const resp = await axios.request({
            url: '/control.php',
            timeout: 1000,
            params: {
                channel_num: channelId,
                action: 'start',
                config_filename: configFilename,
            },
        });
        const str = resp.data;
        const [_, state] = str.split(',');
        return Either_1.right(state);
    }
    catch (e) {
        return Either_1.left(NetworkError_1.fromAxios(e));
    }
}
exports.default = start;
//# sourceMappingURL=start.js.map