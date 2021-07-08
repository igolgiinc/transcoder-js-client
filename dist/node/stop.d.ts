import { TranscoderNodeAPI } from '../api';
import { TypedAxiosInstance } from 'restyped-axios';
import { NetworkError } from './NetworkError';
import { Either } from 'fp-ts/lib/Either';
export default function stop(axios: TypedAxiosInstance<TranscoderNodeAPI>, channelId: number): Promise<Either<NetworkError, StopAPIStatus>>;
export declare type StopAPIStatus = 'STOPPED' | 'TIMEOUT' | 'ERROR';
