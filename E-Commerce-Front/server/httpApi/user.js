import {withRequest} from '@/server/withRequest.js'

const apiConfig = [
    {
        name:"user",
        url:"/users",
        method:"get"
    }
]

export default  withRequest(apiConfig);