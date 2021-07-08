import { AxiosError } from 'axios';
export declare type Type = 'TIMEOUT' | 'ABORTED' | 'OTHER';
export interface NetworkError<T extends Type = Type> {
    type: Type;
    error: AxiosError;
}
export declare function fromAxios(error: AxiosError): NetworkError;
