import config from '@/config/serverConfig.js'

var Mock = require("@/utils/WxMock.js"); 

const baseURL = config.httpBaseURL;

Mock.mock( baseURL + 'carouselList',{
        "statusCode":200,
        "data":[{
		src: "../../../static/temp/banner3.jpg",
		background: "rgb(203, 87, 60)",
	},
	{
		src: "../../../static/temp/banner2.jpg",
		background: "rgb(205, 215, 218)",
	},
	{
		src: "../../../static/temp/banner4.jpg",
		background: "rgb(183, 73, 69)",
	}
]     
 })
 
  Mock.mock('https://xxx.com/user/delete',{
         "statusCode":200,
         "message":"s删除成功"
  })
  
  export default Mock