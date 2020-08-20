import request from './request'

export default (params) => request('services', params)

export const login = (params) => request('login', params, 'post')
