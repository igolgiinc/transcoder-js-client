import {API} from '../api'
import {TypedAxiosInstance} from 'restyped-axios'
import {AxiosError} from 'axios'
import {Either, left, right} from 'fp-ts/lib/Either'
import {NetworkError, fromAxios} from './NetworkError'

// Sample URL: http://10.1.10.193/control.php?channel_num=0&action=start&config_filename=mv_solar_flare.cfg&ts=1612805540049
// Calls the `($action == "start")` branch in control.php.
export default
async function start(axios: Pick<TypedAxiosInstance<API>, 'request'>, channelId: number, configFilename: string): Promise<Either<NetworkError, StartAPIStatus>> {
    try {
        const resp = await axios.request({
            url: '/control.php',
            timeout: 1000,
            params: {
                channel_num: channelId,
                action: 'start',
                config_filename: configFilename,
            },
        })
        const str = resp.data
        const [_, state] = str.split(',') // TODO validate
        return right(state as StartAPIStatus)
    } catch(e) {
        return left(fromAxios(e as AxiosError))
    }
}

export type StartAPIStatus = 'RUNNING'|'TIMEOUT'|'INVALID'|'ERROR'