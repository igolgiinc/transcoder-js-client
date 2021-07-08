import {TranscoderNodeAPI} from '../api'
import {TypedAxiosInstance} from 'restyped-axios'
import {NetworkError, fromAxios} from './NetworkError'
import {Either, left, right} from 'fp-ts/lib/Either'

// Returns 1. list of channels with their associated configs, 2. a dictionary of configs and their contents.
// Sample URL: http://10.1.10.193/index.php
export async function configFileSubmit(axios: TypedAxiosInstance<TranscoderNodeAPI>, configFileName: string, configFileContents: string): Promise<Either<NetworkError, 'OK'>> {
    try{
        const resp = await axios.post('/config-manager-api.php', {
            config_file_name: configFileName,
            config_contents: configFileContents,
        })
        // console.log('response', resp)
        return right('OK')
    } catch(e) {
        console.log('error', e)
        return left(fromAxios(e))
    }
}



