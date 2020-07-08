import {withRequest} from '@/server/withRequest.js'

const apiConfig = [
    {
        name:"carouselList",
        url:"/carouselList",
        method:"get"
    },
    {
        name:"goods",
        url:"/goods",
        method:"get"
    }
]

export default withRequest(apiConfig);