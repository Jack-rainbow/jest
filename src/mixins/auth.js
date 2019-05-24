/**
 * Created by levy on 2018/7/22.
 */
import cookie from 'js-cookie'
import cookieKeys from '@/const/cookie-keys'

// 客户端鉴权
export default {
  async created() {
    if (process.env.NO_LOGIN > 0) return

    let cookieInfo = {}

    cookieKeys.forEach(key => {
      cookieInfo[key] = cookie.get(key)
    })

    // 未登录
    if (!cookieInfo.userId || !cookieInfo.token) {
      this.$router.replace('/login')
    }
    // 已登录但因为刷新, 状态丢失
    else if (!this.$store.state.userId) {
      this.$store.commit('update', cookieInfo)

      try {
        await this.$store.dispatch('permission/fetchThirdId', {
          tenantId: cookieInfo.tenantId
        })
      } catch (e) {
        console.error('auth error: ', e)
      }
    }
  }
}
