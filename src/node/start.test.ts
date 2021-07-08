import start from './start'
import {right, left} from 'fp-ts/lib/Either'
import axios from 'axios'

test('basic', async () => {
    // const resp = await start({request: () => axios.get("http://none.none")}, 1, "")
    // expect(resp).toStrictEqual(right("Network Error"))

    // eslint-disable-next-line @typescript-eslint/require-await
    const resp = await start({request: async () => {throw {message: 'err'}}}, 1, '')
    // expect(resp).toStrictEqual(left("err"))
})
