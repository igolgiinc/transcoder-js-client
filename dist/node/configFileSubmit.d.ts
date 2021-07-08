import { TranscoderNodeAPI } from '../api';
import { TypedAxiosInstance } from 'restyped-axios';
import { NetworkError } from './NetworkError';
import { Either } from 'fp-ts/lib/Either';
export declare function configFileSubmit(axios: TypedAxiosInstance<TranscoderNodeAPI>, configFileName: string, configFileContents: string): Promise<Either<NetworkError, 'OK'>>;
