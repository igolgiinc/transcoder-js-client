import {API, ConfigFileStatusResponse, ConfigFile} from '../api'
import {TypedAxiosInstance} from 'restyped-axios'
import {NetworkError, fromAxios} from './NetworkError'
import {Either, left, right} from 'fp-ts/lib/Either'
export  {ConfigFile} from '../api'
import {ConfigFileStatus} from './ConfigFileStatus'

// Returns 1. list of channels with their associated configs, 2. a dictionary of configs and their contents.
// Sample URL: http://10.1.10.193/config-manager-api.php
export default async function configFileStatusGet(axios: TypedAxiosInstance<API>): Promise<Either<NetworkError, ConfigFileStatus>> {
    try{
        const resp = await axios.request({url: '/config-manager-api.php'})
        const json = resp.data
        return right(reshape(json))
    } catch(e) {
        return left(fromAxios(e))
    }
}




function reshape(resp: ConfigFileStatusResponse): ConfigFileStatus {
    return ConfigFileStatus({
        channels: resp.channels.slice(0, resp.max_channels)
            .map(ch => ({...ch,
                // Note: state will be incremented past 1 if "start" comamnd sent to already started channel.
                // For this reason we check >= 1 rather than = 1.
                running: ch.running >= 1,
                statusOpen: ch.statusOpen == 1, lastStartedTs: ch.lastStarted}))
            .toDictUsingUniqueKey(x => x.name),
        configs: resp.configs,
    })
}