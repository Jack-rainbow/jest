import cookie from 'js-cookie'
import cookieKeys from '@/const/cookie-keys'

import {loginByUsername} from '@/service/xpaas-enterprise-contact'

const cookiePath = process.env.COOKIE_PATH

export const state = () => ({
  userId: '',
  token: '',
  tenantId: '',
  username: '',
  user: {}
})

export const mutations = {
  login(state, payload) {
    cookieKeys.forEach(key => {
      state[key] = payload[key]
      cookie.set(key, payload[key], {
        path: cookiePath
      })
    })
  },
  logout(state) {
    cookieKeys.forEach(key => {
      state[key] = ''
      cookie.remove(key, {
        path: cookiePath
      })
    })
    this.$router.replace('/login')
  },
  update(state, payload) {
    Object.keys(payload).forEach(k => {
      state[k] = payload[k]
    })
  }
}

export const actions = {
  // 用户名账号登录
  async loginByUsername({commit, dispatch}, userInfo) {
    try {
      const res = await loginByUsername(userInfo)

      const data = res.payload

      commit('login', data)

      commit('update', {user: data})
      dispatch('permission/fetchThirdId', {tenantId: data.tenantId})
      return data
    } catch (err) {
      return err
    }
  }
}
