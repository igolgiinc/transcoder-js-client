"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const start_1 = __importDefault(require("./start"));
test('basic', async () => {
    const resp = await start_1.default({ request: async () => { throw { message: 'err' }; } }, 1, '');
});
//# sourceMappingURL=start.test.js.map