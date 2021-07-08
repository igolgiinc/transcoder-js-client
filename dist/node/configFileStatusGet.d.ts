import { TranscoderNodeAPI } from '../api';
import { TypedAxiosInstance } from 'restyped-axios';
import { NetworkError } from './NetworkError';
import { Either } from 'fp-ts/lib/Either';
export { ConfigFile } from '../api';
import { ConfigFileStatus } from './ConfigFileStatus';
export default function configFileStatusGet(axios: TypedAxiosInstance<TranscoderNodeAPI>): Promise<Either<NetworkError, ConfigFileStatus>>;
