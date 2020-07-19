import Http from '../Http'

import { storeUser, setToken, fetchStart, fetchSuccess, fetchError } from '../../redux/actions'
import {readErrors} from "../";

const store = window.store
const Notify = window.Notify

export default (route, data = {}, method = 'get', config = {}) => {
  return new Promise(async (resolve, reject) => {
    fetchStart()
    try {
      const params = (
        (method === 'post' || method === 'put') ? data : {params: data}
      )

      console.log(params);
      const res = await Http[method](route, params, config)

      if (['login', 'register', 'auth'].includes(route)) {
        if (res.data && res.data.user) {
          store.dispatch(storeUser(res.data.user))
        }
      }

      if (res.data && res.data.token) {
        Http.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
        store.dispatch(setToken({token: res.data.token, cache: true}))
      }
      fetchSuccess()
      console.log(res);
      resolve(res.data)
    } catch (e) {
      if (e.message) {
        (e.message === 'Networ Error') && Notify({type: 'error', msg: e.message})
        if (e.response && e.response.status === 422) {
          readErrors(e).map((err, i) => Notify({type: 'error', msg: err, title: i === 0 && e.response.data.message}))
        }
      }
      fetchError(e.message)
      console.log({e});
      reject(e)
    }
  });
}
