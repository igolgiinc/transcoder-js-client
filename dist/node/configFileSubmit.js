"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configFileSubmit = void 0;
const NetworkError_1 = require("./NetworkError");
const Either_1 = require("fp-ts/lib/Either");
async function configFileSubmit(axios, configFileName, configFileContents) {
    try {
        const resp = await axios.post('/config-manager-api.php', {
            config_file_name: configFileName,
            config_contents: configFileContents,
        });
        return Either_1.right('OK');
    }
    catch (e) {
        console.log('error', e);
        return Either_1.left(NetworkError_1.fromAxios(e));
    }
}
exports.configFileSubmit = configFileSubmit;
//# sourceMappingURL=configFileSubmit.js.map