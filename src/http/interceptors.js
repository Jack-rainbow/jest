import Vue from 'vue'
import cookie from 'js-cookie'
import cookieKeys from '@/const/cookie-keys'
import {redirect} from '@/utils'

let ignore = /xpaas-enterprise-contact\/security\/api\/v1\/configs/

/**
 * 给axios 增加拦截器
 * @param {} axios 实例
 */
export default function interceptors(axios) {
  axios.interceptors.request.use(
    config => {
      let url = config.url
      // jwt 验证
      if (cookie.get('token')) {
        config.headers.common['Authorization'] = `Bearer ${cookie.get('token')}`
      }

      url += url.indexOf('?') > -1 ? '&' : '?'
      url += `tenantId=${cookie.get('tenantId') || ''}&userId=${cookie.get(
        'userId' || ''
      )}&_=${new Date().getTime()}`

      config.url = url
      return config
    },
    function(error) {
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    function(res) {
      if (res.status !== 200) {
        let data = res.data

        Vue.$notify.error({
          title: res.status,
          message: data.payload || data.msg
        })

        if (res.status == 401) {
          cookieKeys.forEach(key => {
            cookie.remove(key, {path})
          })
          redirect('/login')
        }
      }

      if (!ignore.test(res.config.url) && res.data.code != 0) {
        res.data.msg &&
          Vue.$notify.error({
            message: res.data.msg
          })
        return Promise.reject(res)
      }

      return res
    },
    function(error) {
      // Do something with res error
      return Promise.reject(error)
    }
  )

  return axios
}
