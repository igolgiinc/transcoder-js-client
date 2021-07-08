import {API, LoadChannelsResponse} from '../api'
import {TypedAxiosInstance} from 'restyped-axios'
import {Either, left, right} from 'fp-ts/lib/Either'

// Returns summary of channel state
// Sample URL: http://10.1.10.193/json/control.php?1612553366829=&fName=LoadChannels
// Calls the `loadChannels` method in `web_admin/includes/db.class.php'.
// On error, returns a string representation of the exception thrown.
export default async function loadChannelsGet(axios: TypedAxiosInstance<API>): Promise<Either<string, LoadChannelsResponse|string>> {
    try{
        const resp = await axios.request({
            url: '/json/control.php',
            params: {
                fName: 'LoadChannels',
            },
        })
        const json = resp.data
        return right(json)
    } catch(e) {
        return left(e)
    }
}

// Sample Response:
// {
//     "data": [
//         {
//             "name": "channel0",
//             "0": "channel0",
//             "config": "mv_solar_flare.cfg",
//             "1": "mv_solar_flare.cfg",
//             "running": "0",
//             "2": "0",
//             "statusOpen": "1",
//             "3": "1",
//             "lastStarted": "1612553564",
//             "4": "1612553564"
//         },
//         {
//             "name": "channel1",
//             "0": "channel1",
//             "config": "mv_starz_edge.cfg",
//             "1": "mv_starz_edge.cfg",
//             "running": "0",
//             "2": "0",
//             "statusOpen": "1",
//             "3": "1",
//             "lastStarted": "1611782149",
//             "4": "1611782149"
//         },
//         {
//             "name": "channel2",
//             "0": "channel2",
//             "config": "regression_test2.cfg",
//             "1": "regression_test2.cfg",
//             "running": "0",
//             "2": "0",
//             "statusOpen": "1",
//             "3": "1",
//             "lastStarted": "1539730408",
//             "4": "1539730408"
//         },
//         {
//             "name": "channel3",
//             "0": "channel3",
//             "config": "regression_test3.cfg",
//             "1": "regression_test3.cfg",
//             "running": "0",
//             "2": "0",
//             "statusOpen": "1",
//             "3": "1",
//             "lastStarted": "1539746259",
//             "4": "1539746259"
//         },
//         {
//             "name": "channel4",
//             "0": "channel4",
//             "config": "",
//             "1": "",
//             "running": "0",
//             "2": "0",
//             "statusOpen": "0",
//             "3": "0",
//             "lastStarted": "0",
//             "4": "0"
//         },
//         {
//             "name": "channel5",
//             "0": "channel5",
//             "config": "",
//             "1": "",
//             "running": "0",
//             "2": "0",
//             "statusOpen": "0",
//             "3": "0",
//             "lastStarted": "0",
//             "4": "0"
//         },
//         {
//             "name": "channel6",
//             "0": "channel6",
//             "config": "",
//             "1": "",
//             "running": "0",
//             "2": "0",
//             "statusOpen": "0",
//             "3": "0",
//             "lastStarted": "0",
//             "4": "0"
//         },
//         {
//             "name": "channel7",
//             "0": "channel7",
//             "config": "",
//             "1": "",
//             "running": "0",
//             "2": "0",
//             "statusOpen": "0",
//             "3": "0",
//             "lastStarted": "0",
//             "4": "0"
//         }
//     ],
//     "status": "OK"
// }