"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NetworkError_1 = require("./NetworkError");
const Either_1 = require("fp-ts/lib/Either");
async function stop(axios, channelId) {
    try {
        const resp = await axios.request({
            url: '/control.php',
            timeout: 1000,
            params: {
                channel_num: channelId,
                action: 'stop',
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
exports.default = stop;
//# sourceMappingURL=stop.js.map