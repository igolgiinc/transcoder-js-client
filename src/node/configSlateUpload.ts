import {TranscoderNodeAPI} from '../api'
import {TypedAxiosInstance} from 'restyped-axios'
import {NetworkError, fromAxios} from './NetworkError'
import {Either, left, right} from 'fp-ts/lib/Either'
import * as FormData from 'form-data'

// Returns 1. list of channels with their associated configs, 2. a dictionary of configs and their contents.
// Sample URL: http://10.1.10.193/index.php
export async function configSlateUpload(axios: TypedAxiosInstance<TranscoderNodeAPI>, formData: FormData): Promise<Either<NetworkError, string>> {
    try{
        axios.interceptors.request.use(request => {
            console.log('Starting Request', JSON.stringify(request, null, 2))
            return request
        })
        const resp = await axios.post('/json/slate.php', formData,
            {
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`, // see https://tinyurl.com/yzr6lzj7
                },
            })
        return right(resp.data)
    } catch(e) {
        return left(fromAxios(e))
    }
}

