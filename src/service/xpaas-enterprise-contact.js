/*
 * 登录模块接口
 * @author barret
 * @date 2019/05/02
 */
import axios from '@/http'

const apiVersion = '/api/v1'
const serviceType = '/xpaas-enterprise-contact'
const basicUrl = `${serviceType}${apiVersion}`

// 用户名密码登录
// export const loginByUsername = `${basicUrl}/users/login`
/**
 *
 * @param {*} userInfo
 * username: 用户名
 * password: 密码
 * channel 频道
 * code
 */
export const loginByUsername = userInfo =>
  axios.$post(`${basicUrl}/users/login`, userInfo)

// 获取头部导航栏thirdId
export const getAdminUser = () => axios.$get(`${basicUrl}/users/adminUser`)
