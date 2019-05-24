/**
 * 获取APP信息
 * @author barret
 * @date 2019/05/02
 */
import {getAppConfig} from '@/service/dapi'

export const state = () => ({
  copyright: '',
  appName: '',
  htmlTitle: '',
  favicon: '',
  homePageImg: ''
})

export const mutations = {
  update(state, payload) {
    Object.keys(payload).forEach(k => {
      state[k] = payload[k]
    })
  }
}

export const actions = {
  // 配置的元信息
  async fetchMetaInfo({commit}) {
    try {
      const res = await getAppConfig()

      const dataList = res.payload || []
      let meta = {}
      dataList.forEach(item => {
        meta[item.key] = item.value
      })
      commit('update', meta)

      return dataList
    } catch (err) {
      return err
    }
  }
}
