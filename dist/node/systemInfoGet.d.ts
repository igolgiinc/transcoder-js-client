import { TranscoderNodeAPI, SystemInfoResponse } from '../api';
import { TypedAxiosInstance } from 'restyped-axios';
import { Either } from 'fp-ts/lib/Either';
export default function systemInfoGet(axios: TypedAxiosInstance<TranscoderNodeAPI>, includeDiskStats?: boolean): Promise<Either<string, SystemInfoResponse>>;
