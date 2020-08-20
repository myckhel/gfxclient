import request from './request'

export default (params) => request('bookings', params)

export const login = (params) => request('login', params, 'post')
