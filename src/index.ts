import * as api from './api'
export * from './api'
import axios, {TypedAxiosInstance} from 'restyped-axios'
import stop, {StopAPIStatus} from './node/stop'
import start, {StartAPIStatus} from './node/start'
import configFileStatusGet from './node/configFileStatusGet'
import {ConfigFileStatus} from './node/ConfigFileStatus'
import {configFileSubmit} from './node/configFileSubmit'
import {configSlateUpload} from './node/configSlateUpload'
import loadChannelsGet from './node/loadChannelsGet'
import systemInfoGet from './node/systemInfoGet'
import {Either} from 'fp-ts/Either'
import {NetworkError} from './node/NetworkError'
import FormData from 'form-data'


export class TranscoderNodeClient {
    public axios: TypedAxiosInstance<api.TranscoderNodeAPI>

    constructor(public readonly node: {ip: string, auth: {username: string, password: string}}) {
        this.axios = axios.create<api.TranscoderNodeAPI>({baseURL: `http://${node.ip}/`})
        this.axios.interceptors.request.use(function (config) {
            config.auth = node.auth
            return config;
        }, function (error) {
            console.log('Axios error', error)
            return Promise.reject(error);
        });
    }

    stop = async (channelId: number): Promise<Either<NetworkError, StopAPIStatus>> =>
        stop(this.axios, channelId)

    start = async (channelId: number, configFilename: string): Promise<Either<NetworkError, StartAPIStatus>> =>
        start(this.axios, channelId, configFilename)

    loadChannelsGet = async(): Promise<Either<string, api.LoadChannelsResponse | string>> =>
        loadChannelsGet(this.axios)

    systemInfoGet = async(): Promise<Either<string, api.SystemInfoResponse>> =>
        systemInfoGet(this.axios)

    configFileStatusGet = async(): Promise<Either<NetworkError, ConfigFileStatus>> =>
        configFileStatusGet(this.axios)

    configFileSubmit = async(configFileName: string, configFileContents: string): Promise<Either<NetworkError, 'OK'>> =>
        configFileSubmit(this.axios, configFileName, configFileContents)

    configSlateUpload = async(formData: FormData): Promise<Either<NetworkError, string>> =>
        configSlateUpload(this.axios, formData)
}
