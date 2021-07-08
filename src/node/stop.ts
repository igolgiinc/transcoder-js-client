import {API} from '../api'
import {TypedAxiosInstance} from 'restyped-axios'
import {AxiosError} from 'axios'
import {NetworkError, fromAxios} from './NetworkError'
import {Either, left, right} from 'fp-ts/lib/Either'

import axios from 'axios'

// Sample URL: http://10.1.10.193/control.php?channel_num=0&action=stop&ts=1612805579689
// Calls the `($action == "stop")` branch in control.php.
export default async function stop(axios: TypedAxiosInstance<API>, channelId: number): Promise<Either<NetworkError, StopAPIStatus>> {
    try {
        const resp = await axios.request({
            url: '/control.php',
            timeout: 1000,
            params: {
                channel_num: channelId,

                action: 'stop',
            },
        })
        const str = resp.data
        const [_, state] = str.split(',') // TODO: Validate
        return right(state as StopAPIStatus)
    } catch(e) {
        return left(fromAxios(e as AxiosError))
    }
}

export type StopAPIStatus = 'STOPPED'|'TIMEOUT'|'ERROR'

/*
Sample responses:

0, STOPPED

100, ERROR
*/
