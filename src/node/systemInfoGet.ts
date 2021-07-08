import {TranscoderNodeAPI, SystemInfoResponse} from '../api'
import {TypedAxiosInstance} from 'restyped-axios'
import {Either, left, right} from 'fp-ts/lib/Either'

// System info
// Sample URL: http://10.1.10.193/json/stats.php?action=sample&t=1612553366690
// Calls the `case "sample"` case in `web_admin/json/stats.php`.
export default async function systemInfoGet(
    axios: TypedAxiosInstance<TranscoderNodeAPI>,
    includeDiskStats: boolean = false): Promise<Either<string, SystemInfoResponse>> {
    try{
        const resp = await axios.request({
            url: '/json/stats.php',
            params: {
                action: 'sample',
                include_diskstats: includeDiskStats ? 1 : 0,
            },
        })
        return right(resp.data)
    } catch (e) {
        console.log(e)
        return left(e)
    }
}


// If `include_diskstats` sent in request, also sends disk stats
// Sample Response:
// {
//     "status": "OK",
//     "data": {
//         "cpuload": {
//             "user": "91528147",
//             "nice": "116984034",
//             "system": "11929724",
//             "idle": "10503252042",
//             "last_user": "91528146",
//             "last_nice": "116984034",
//             "last_system": "11929723",
//             "last_idle": "10503249650",
//             "load": {
//                 "user": 0.041771094402673,
//                 "nice": 0,
//                 "system": 0.041771094402673,
//                 "idle": 99.916457811195,
//                 "cpu": 0.083542188805347
//             }
//         },
//         "uptime": 8963331.46,
//         "memory": {
//             "free_kb": 62983164,
//             "total_kb": 65860952
//         }
//       "disk": {      // This key is included only if the request was made with `include_diskstats=1`
//           "free_gb": "70.1",
//           "total_gb": "229.1"
//        }
//     }
// }