console.log(process.env);
const {NODE_ENV, MIX_CSRF_TOKEN, MIX_MAP_API_KEY, MIX_OneSignal_KEY, MIX_PUSHER_APP_ID, MIX_PUSHER_APP_KEY, MIX_PUSHER_APP_SECRET} = process.env
let api = "https://gfx.adbin.com.ng/public/api/";
if (NODE_ENV || NODE_ENV === 'development') {
    api = "http://127.0.0.1:8000/api/";
    // api = "https://gfx.adbin.com.ng/public/api/";
}
const API_URL = api

export {API_URL, MIX_CSRF_TOKEN as CSRF_TOKEN, MIX_MAP_API_KEY as MAP_API_KEY, MIX_OneSignal_KEY as OneSignal_KEY, MIX_PUSHER_APP_KEY as PUSHER_APP_KEY}
