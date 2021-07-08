"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NetworkError_1 = require("./NetworkError");
const Either_1 = require("fp-ts/lib/Either");
const ConfigFileStatus_1 = require("./ConfigFileStatus");
async function configFileStatusGet(axios) {
    try {
        const resp = await axios.request({ url: '/config-manager-api.php' });
        const json = resp.data;
        return Either_1.right(reshape(json));
    }
    catch (e) {
        return Either_1.left(NetworkError_1.fromAxios(e));
    }
}
exports.default = configFileStatusGet;
const utils_1 = require("../utils");
function reshape(resp) {
    return ConfigFileStatus_1.ConfigFileStatus({
        channels: utils_1.toDictUsingUniqueKey(resp.channels.slice(0, resp.max_channels)
            .map(ch => ({ ...ch,
            running: ch.running >= 1,
            statusOpen: ch.statusOpen == 1, lastStartedTs: ch.lastStarted })), x => x.name),
        configs: resp.configs,
    });
}
//# sourceMappingURL=configFileStatusGet.js.map