import request from './request'

export const register = (params) => request('register', params, 'post')

export const login = (params) => request('login', params, 'post')

export const logout = (params) => request('logout', params)
