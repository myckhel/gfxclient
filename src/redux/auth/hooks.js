import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {logout} from '../../func/async'

import {logoutUser} from './actions'
import {selectIsAuth} from './selectors'

export const useLogout = () => {
  const dispatch = useDispatch()
  return () => {
    dispatch(logoutUser())
    logout()
  }
}

export const useIsLoggedIn = () => useSelector(selectIsAuth)
