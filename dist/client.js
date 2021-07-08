"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranscoderNodeClient = void 0;
const restyped_axios_1 = __importDefault(require("restyped-axios"));
const stop_1 = __importDefault(require("./node/stop"));
const start_1 = __importDefault(require("./node/start"));
const configFileStatusGet_1 = __importDefault(require("./node/configFileStatusGet"));
const configFileSubmit_1 = require("./node/configFileSubmit");
const configSlateUpload_1 = require("./node/configSlateUpload");
const loadChannelsGet_1 = __importDefault(require("./node/loadChannelsGet"));
const systemInfoGet_1 = __importDefault(require("./node/systemInfoGet"));
class TranscoderNodeClient {
    constructor(node) {
        this.node = node;
        this.stop = async (channelId) => stop_1.default(this.axios, channelId);
        this.start = async (channelId, configFilename) => start_1.default(this.axios, channelId, configFilename);
        this.loadChannelsGet = async () => loadChannelsGet_1.default(this.axios);
        this.systemInfoGet = async () => systemInfoGet_1.default(this.axios);
        this.configFileStatusGet = async () => configFileStatusGet_1.default(this.axios);
        this.configFileSubmit = async (configFileName, configFileContents) => configFileSubmit_1.configFileSubmit(this.axios, configFileName, configFileContents);
        this.configSlateUpload = async (formData) => configSlateUpload_1.configSlateUpload(this.axios, formData);
        this.axios = restyped_axios_1.default.create({ baseURL: `http://${node.ip}/` });
        this.axios.interceptors.request.use(function (config) {
            config.auth = node.auth;
            return config;
        }, function (error) {
            console.log('Axios error', error);
            return Promise.reject(error);
        });
    }
}
exports.TranscoderNodeClient = TranscoderNodeClient;
//# sourceMappingURL=client.js.map