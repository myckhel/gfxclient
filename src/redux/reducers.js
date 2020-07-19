import { combineReducers } from 'redux';
import auth from './auth/reducer';
// import app from './app/reducer';
// import user from './user/reducer';

const appReducer = combineReducers({
    auth,
    // user,
    // app,
});

const rootReducer = (state, action) => {
    if (action.type === 'LOG_OUT') {
        // for all keys defined in your persistConfig(s)
        // AsyncStorage.clear();
        // localStorage.clear()
        // navigate("Login")
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
