// import axios from "axios";
import {logoutUser} from '../redux/actions'

const { REACT_APP_API_URL: API_URL, REACT_APP_CSRF_TOKEN: CSRF_TOKEN } = process.env;

const axios = window.axios
axios.defaults.baseURL = API_URL;

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      logoutUser()
    } else if (error.response && (error.response.status === 500 || error.response.status === 405)) {
      console.log(error.response.data);
    }

    // return error
    return Promise.reject(error);
  }
);

window.Http = axios.create({
  baseURL : API_URL,
  headers: {
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': CSRF_TOKEN,
  },
})
export default axios
