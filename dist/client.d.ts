import * as api from './api';
import { TypedAxiosInstance } from 'restyped-axios';
import { StopAPIStatus } from './node/stop';
import { StartAPIStatus } from './node/start';
import { ConfigFileStatus } from './node/ConfigFileStatus';
import { Either } from 'fp-ts/Either';
import { NetworkError } from './node/NetworkError';
import FormData from 'form-data';
export declare class TranscoderNodeClient {
    readonly node: {
        ip: string;
        auth: {
            username: string;
            password: string;
        };
    };
    axios: TypedAxiosInstance<api.TranscoderNodeAPI>;
    constructor(node: {
        ip: string;
        auth: {
            username: string;
            password: string;
        };
    });
    stop: (channelId: number) => Promise<Either<NetworkError, StopAPIStatus>>;
    start: (channelId: number, configFilename: string) => Promise<Either<NetworkError, StartAPIStatus>>;
    loadChannelsGet: () => Promise<Either<string, api.LoadChannelsResponse | string>>;
    systemInfoGet: () => Promise<Either<string, api.SystemInfoResponse>>;
    configFileStatusGet: () => Promise<Either<NetworkError, ConfigFileStatus>>;
    configFileSubmit: (configFileName: string, configFileContents: string) => Promise<Either<NetworkError, 'OK'>>;
    configSlateUpload: (formData: FormData) => Promise<Either<NetworkError, string>>;
}
