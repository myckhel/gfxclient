import React, {useState} from 'react';

import {useDispatch} from 'react-redux';

import {logout} from '../../func/async'

import {logoutUser} from './actions'

export const useLogout = () => {
  const dispatch = useDispatch()
  return () => {
    dispatch(logoutUser())
    logout()
  }
}
