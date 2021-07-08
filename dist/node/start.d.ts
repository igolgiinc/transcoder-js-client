import { TranscoderNodeAPI } from '../api';
import { TypedAxiosInstance } from 'restyped-axios';
import { Either } from 'fp-ts/lib/Either';
import { NetworkError } from './NetworkError';
export default function start(axios: Pick<TypedAxiosInstance<TranscoderNodeAPI>, 'request'>, channelId: number, configFilename: string): Promise<Either<NetworkError, StartAPIStatus>>;
export declare type StartAPIStatus = 'RUNNING' | 'TIMEOUT' | 'INVALID' | 'ERROR';
