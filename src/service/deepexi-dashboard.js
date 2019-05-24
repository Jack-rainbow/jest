/*
 * 员工中心接口请求列表
 * @author barret
 * @date 2018
 */
import axios from '@/http'

const apiVersion = '/api/v1'
const serviceType = '/deepexi-dashboard'
const basicUrl = `${serviceType}${apiVersion}`

// 根据thirdId获取头部导航栏列表
export const getXpaasTag = ({thirdId}) =>
  axios.$get(`${basicUrl}/tenantComponents/xpaas/getXpaasTag/${thirdId}`)
