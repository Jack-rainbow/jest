/*
 * 登录模块接口
 * @author barret
 * @date 2019/05/02
 */
import axios from '@/http'

const apiVersion = '/api/v1'
const serviceType = '/xpaas-console-api'
const basicUrl = `${serviceType}${apiVersion}`

// 根据appId获取左侧菜单
export const getUserMenuTree = ({appId}) =>
  axios.$get(`${basicUrl}/xpassPermission/userMenuTree/${appId}`)
