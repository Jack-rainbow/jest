/**
 * app的整体设置
 * @author barret
 * @date 2019/05/04
 */
import {getAppConfig} from '@/service/dapi'

export const state = () => ({
  collapse: false // 是否收缩侧边栏
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
