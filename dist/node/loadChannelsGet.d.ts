import { TranscoderNodeAPI, LoadChannelsResponse } from '../api';
import { TypedAxiosInstance } from 'restyped-axios';
import { Either } from 'fp-ts/lib/Either';
export default function loadChannelsGet(axios: TypedAxiosInstance<TranscoderNodeAPI>): Promise<Either<string, LoadChannelsResponse | string>>;
