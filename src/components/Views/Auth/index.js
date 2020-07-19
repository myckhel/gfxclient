import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {register, login} from '../../../func/async'
import {Loading} from '../../Base/Anim'
import {useMergeState} from '../../../redux/hooks'

export default () => {
  const [state, setState] = useMergeState({
    loginView: true, loading: false,
  })

  const {loginView, loading, name, email, password, password_confirmation} = state

  const handleToggle = () => setState({loginView: !loginView})

  const submit = async (e) => {
    e.preventDefault()

    const query = loginView ? login : register

    try {
      setState({loading: true})
      const {status, message} = await query({password_confirmation, name, email, password})

    } catch (e) {} finally {
      setState({loading: false})
    }
  }

  const changeInput = ({target}) => {
    const {name, value} = target
    setState({[name]: value})
  }

  return (
    <section className="blog-one" id="blog">
      <img src={require("../../../assets/images/shapes/blog-shape-1-1.png")} alt="" className="blog-one__shape-1"/>
      <div className="container">
        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          <p>Authenticate</p>
          <h3>Login or Signup Account</h3>

          <div className="row d-flex align-items-center justify-content-center pricing-one list-inline text-center switch-toggler-list" role="tablist" id="switch-toggle-tab">
            <p> Login </p>
              <label className={loginView ? 'switch on' : 'switch off'}>
                <span onClick={handleToggle} className="slider round"></span>
              </label>
              <p> Signup </p>
          </div>

          <form className="contact-form-validated contact-one__form">
            <div className="row">
              {!loginView && <div className="col-md-6">
                <input onChange={changeInput} type="text" name="name" placeholder="Name"/>
              </div>}
              <div className="col-md-6">
                <input onChange={changeInput} type="email" name="email" placeholder="Email"/>
              </div>
              <div className="col-md-6">
                <input onChange={changeInput} type="password" name="password" placeholder="Password"/>
              </div>
              {!loginView && <div className="col-md-6">
                <input onChange={changeInput} type="password" name="password_confirmation" placeholder="Confirm Password"/>
              </div>}
              <div className="col-md-12">
                <button disabled={loading} onClick={submit} className="thm-btn contact-one__form-btn">
                  {loading ? <Loading /> : loginView ? 'Login' : 'Signup'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
