
import {useSelector} from "react-redux";

export const selectAuthUser = (({auth}) => auth.authUser)

export const selectIsAuth = (({auth}) => auth.authUser && auth.token)
