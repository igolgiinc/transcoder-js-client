"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannelNumbers = exports.ConfigFileStatus = void 0;
const utils_1 = require("../utils");
const ConfigFileStatus = (props) => {
    return {
        channels: props.channels,
        configs: props.configs,
        configFileForChannelWithId: (id) => {
            const st = props.channels[`channel${id}`];
            props.configs;
            st;
            st?.config;
            return st?.config !== undefined ? props.configs[st.config] : undefined;
        },
    };
};
exports.ConfigFileStatus = ConfigFileStatus;
const regex = /channel([\d]+)/i;
function channelNumber(channelName) {
    const x = regex.exec(channelName);
    return (x !== null && x.length >= 2) ? parseInt(x[1]) : undefined;
}
const getChannelNumbers = (cfs) => utils_1.compactMap(Object.keys(cfs.channels), channelNumber);
exports.getChannelNumbers = getChannelNumbers;
//# sourceMappingURL=ConfigFileStatus.js.map