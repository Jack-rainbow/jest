/**
 * 动态路由信息
 * @author barret
 * @date 2019/05/02
 */
import {getAdminUser} from '@/service/xpaas-enterprise-contact'
import {SPA_NAME} from '@/const/const'
import {getXpaasTag} from '@/service/deepexi-dashboard'
import {getUserMenuTree} from '@/service/xpaas-console-api'

export const state = () => ({
  thirdId: '',
  menuList: []
})

export const mutations = {
  update(state, payload) {
    Object.keys(payload).forEach(k => {
      state[k] = payload[k]
    })
  }
}

export const actions = {
  // 获取头部列表的thirdId
  async fetchThirdId({commit, dispatch}, {tenantId}) {
    let {payload} = await getAdminUser()
    const {thirdId} = payload || {}

    commit('update', {
      thirdId
    })

    try {
      const headMenu = await dispatch('fetchHeadMenu', {thirdId})

      // 根据当前的项目名称来请求左侧菜单
      for (let item of headMenu) {
        if (item.name === SPA_NAME) {
          dispatch('fetchUserMenuTree', {appId: item.id})
          break
        }
      }
    } catch (e) {
      console.error('fetchHeadMenu error: ', e)
    }
  },
  // 根据thirdId获取头部导航栏列表
  async fetchHeadMenu({commit, dispatch}, {thirdId}) {
    let headMenuListRes = await getXpaasTag({thirdId})
    const payload = headMenuListRes.payload || []
    commit('update', {
      headMenuList: payload
    })
    return payload
  },
  // 根据appId获取左侧菜单, 并设置当前的mainHead值
  async fetchUserMenuTree({commit}, {appId}) {
    let userMenuTreeRes = await getUserMenuTree({appId})
    const payload = userMenuTreeRes.payload || []
    // 获取路由对应的页面名

    commit('update', {
      menuList: payload
    })
  }
}
