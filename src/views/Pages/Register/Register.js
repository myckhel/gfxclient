import React, { useState } from 'react';
// import {signUp} from '../../../func/async/user'

const Register = () => {
  const [state, setState] = useState({
    loading: false, name: '', password: '', email: ''
  })
  const {loading, name, password, email} = state

  const register = async ({preventDefault}) => {
    // preventDefault()
    try {
      // const res = await signUp({name, password, email})
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

export default Register;
