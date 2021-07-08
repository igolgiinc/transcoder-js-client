import FormData from 'form-data'

export interface API {
    '/control.php': {
        GET: {
            query:
            {
                channel_num: number
                action: 'stop'
            } | {
                channel_num: number
                action: 'start'
                config_filename: string
            }
            response: string
        }
    },
}

// Load Channels
export interface API {
    '/json/control.php': {
        GET: {
            query:
            {
                fName: 'LoadChannels'
            }
            response: LoadChannelsResponse | string
        }
    },
}
export interface LoadChannelsResponse {
    data: LoadChannelsResponseChannelInfo[],
    status: 'OK' | 'ERROR' // TODO check respnose set
}
export interface LoadChannelsResponseChannelInfo {
    name: string
    config: string
    running: string // number as string
    statusOpen: string // number as string
    lastStarted: string // timestamp number as string
}

// System Info
export interface API {
    '/json/stats.php': {
        GET: {
            query:
            {
                action: 'sample'
                include_diskstats?: 0|1
            }
            response: SystemInfoResponse
        }
    }
}
export interface SystemInfoResponse {
    status: 'OK' // Always returns success
    data: {
        cpuload: {
            user: string
            nice: string
            system: string
            idle: string
            last_user: string
            last_nice: string
            last_system: string
            last_idle: string
            load: {
                user: number,
                nice: number,
                system: number
                idle: number
                cpu: number
            }
        }
        uptime: number,
        memory: {
            free_kb: number
            total_kb: number
        }
        disk?: {
            free_gb: string,
            total_gb: string,
        }
    }
}

// Config file endpoint
export interface API {
    '/config-manager-api.php': {
        GET: {
            response: ConfigFileStatusResponse
        },
        POST: {
            body: {
                config_file_name: string,
                config_contents: string
            },
            response: void
        }
    }
}
export interface ConfigFileStatusResponse {
    max_channels: number,
    channels: {name: string, config: string, running: number, statusOpen: number, lastStarted: number}[],
    configs: {[key: string]: ConfigFile}
}
export type ConfigFile = {
    name: string,
    contents: string|null,
    last_modified_ts: string|null
}

// Slate Upload
export interface API {
    '/json/slate.php': {
        POST: {
            body: FormData
            response: string
        }
    }
}



