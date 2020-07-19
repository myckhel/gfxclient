import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import {signIn} from '../../../func/async/user'
import {NotificationContainer} from 'react-notifications';

const Login = () => {
  const [state, setState] = useState({
    loading: false, name: '', password: ''
  })
  const {loading, name, password} = state

  const login = async ({preventDefault}) => {
    // preventDefault()
    try {
      // const res = await signIn({name, password})
    } catch (e) {
      console.log({e});
    } finally {
    }
  }

  const changeInput = ({target: {value, name}}) => setState({...state, [name]: value})

  return (
    <div className="app flex-row align-items-center">

    </div>
  );
}

export default Login;
