"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Either_1 = require("fp-ts/lib/Either");
async function systemInfoGet(axios, includeDiskStats = false) {
    try {
        const resp = await axios.request({
            url: '/json/stats.php',
            params: {
                action: 'sample',
                include_diskstats: includeDiskStats ? 1 : 0,
            },
        });
        return Either_1.right(resp.data);
    }
    catch (e) {
        console.log(e);
        return Either_1.left(e);
    }
}
exports.default = systemInfoGet;
//# sourceMappingURL=systemInfoGet.js.map