import {AxiosError} from 'axios'

export type Type = 'TIMEOUT' | 'ABORTED' | 'OTHER'

export interface NetworkError<T extends Type = Type> {
    type: Type,
    error: AxiosError
}

export function fromAxios(error: AxiosError): NetworkError {
    let type: Type = 'OTHER'
    if(error.code == 'ECONNABORTED') {
        if(error.message.startsWith('timeout')) {
            // See https://github.com/axios/axios/issues/1543
            type = 'TIMEOUT'
        } else {
            type = 'ABORTED'
        }
    }
    return {type, error}
}
