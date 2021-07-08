import { ConfigFile } from '../api';
export interface ConfigFileStatus {
    readonly channels: {
        [name: string]: {
            name: string;
            config: string;
            running: boolean;
            statusOpen: boolean;
            lastStartedTs: number;
        } | undefined;
    };
    readonly configs: {
        [fileName: string]: ConfigFile | undefined;
    };
    configFileForChannelWithId: (id: number) => ConfigFile | undefined;
}
export declare const ConfigFileStatus: (props: Pick<ConfigFileStatus, 'channels' | 'configs'>) => ConfigFileStatus;
export declare const getChannelNumbers: (cfs: ConfigFileStatus) => number[];
