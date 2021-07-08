import {ConfigFile} from '../api'

export interface ConfigFileStatus {
    readonly channels: {[name: string]: {name: string, config: string, running: boolean, statusOpen: boolean, lastStartedTs: number}|undefined},
    readonly configs: {[fileName: string]: ConfigFile|undefined}
    configFileForChannelWithId: (id: number) => ConfigFile|undefined
}

export const ConfigFileStatus = (props: Pick<ConfigFileStatus, 'channels'|'configs'>): ConfigFileStatus => {
    return {
        channels: props.channels,
        configs: props.configs,
        configFileForChannelWithId: (id: number) => {
            const st = props.channels[`channel${id}`]
            props.configs //?
            st//?
            st?.config//?
            return st?.config !== undefined ? props.configs[st.config] : undefined
        },
    }
}
const regex = /channel([\d]+)/i
function channelNumber(channelName: string): number|undefined {
    const x = regex.exec(channelName)
    return (x !== null && x.length >= 2) ? parseInt(x[1]) : undefined
}
export const getChannelNumbers = (cfs: ConfigFileStatus): number[] =>
    Object.keys(cfs.channels)
        .compactMap(channelNumber)
