import axios from 'axios'
import interceptors from './interceptors'
import axiosExtra from './extends'

const config = {}

if (process.env.MODE == 'prod') {
  config.baseURL = process.env.API_SERVER
}

const instance = axios.create(config)

// 扩展 $get 等方法
axiosExtra(instance)
interceptors(instance)

export default instance
