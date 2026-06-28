import axios from "axios";

// 申明KEY和API地址
const KEY = import.meta.env.VITE_AMAP_KEY
const BASE_URL = 'https://restapi.amap.com/v3/weather/weatherInfo'

// async标明异步请求，函数中return的将为promise对象
export const getWeather = async(city = '北京') => {
    // try尝试运行，catch捕捉错误
    try{
        // 携带信息请求数据，await等待该行命令执行完成(并且解包promise对象)
        const response = await axios.get(BASE_URL,{
            params: {
                key: KEY,
                city: city,
                extensions: 'base'
            }
        })
        if(response.data.status === '1'){
            return response.data.lives[0]
        }else{
            // 无法找到时(即status !== '1')的错误信息
            throw new Error(response.data.info || '未找到该城市的天气');
        }
    }catch(error){
        // 无法请求时的错误信息
        console.log("❌weather.js报错信息: ",error.message);
        // 保证错误信息能从底层（请求函数）一路传递到顶层（页面组件）
        throw error
    }
}