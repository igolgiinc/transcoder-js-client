import { TranscoderNodeAPI } from '../api';
import { TypedAxiosInstance } from 'restyped-axios';
import { NetworkError } from './NetworkError';
import { Either } from 'fp-ts/lib/Either';
import * as FormData from 'form-data';
export declare function configSlateUpload(axios: TypedAxiosInstance<TranscoderNodeAPI>, formData: FormData): Promise<Either<NetworkError, string>>;
