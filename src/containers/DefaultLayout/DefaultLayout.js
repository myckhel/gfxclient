import React, { memo, Component, Suspense, useState, useEffect } from 'react';

import { Spin, Layout, Menu, Breadcrumb } from 'antd';

// sidebar nav config
// routes config
import routes from '../../routes';

import './style.css'

import { Route, Switch, Redirect, useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setInitUrl, logoutUser} from "../../redux/actions";
import {selectAuthUser} from "../../redux/selectors";
import {NotificationContainer} from 'react-notifications';
import Http from '../../func/Http';
import {Loading} from '../../components/Base/Anim'
import 'antd/dist/antd.css';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import SideBar from './SideBar'
import DefaultFooter from './DefaultFooter';
import Header from './Header';

// Pages
const Home = React.lazy(() => import('../../views/Home'));
const Blog = React.lazy(() => import('../../views/Blog/blog'));
const BlogDetails = React.lazy(() => import('../../views/Blog/blog-details'));
const Auth = React.lazy(() => import('../../views/Auth'));

const Login = React.lazy(() => import('../../views/Pages/Login'));
const Register = React.lazy(() => import('../../views/Pages/Register'));
const Page404 = React.lazy(() => import('../../views/Pages/Page404'));
const Page500 = React.lazy(() => import('../../views/Pages/Page500'));

const { Footer, Sider, Content } = Layout

const RestrictedRoute = ({component: Component, location, token, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      token
      ? <Component {...props} />
      : <Redirect
        to={{
          pathname: '/auth',
          state: {from: location}
        }}
    />}
  />
)

const AuthRoutes = () => {
  const dispatch = useDispatch();
  const {token, initURL} = useSelector(({auth}) => auth);
  const authUser = useSelector(selectAuthUser)

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    if (!token) {
      history.push('/auth');
    } else if (initURL === '/auth') {
      history.push('/dashboard');
    }
  }, [token, initURL, location, history]);

  const loading = () => <div className="animated fadeIn pt-3 text-center"><Spin size="xl" color="secondary" /></div>;

  return (
    <Layout className='layout'>
      <Header />
      <Layout >
      <SideBar />
      {/*<Sider />*/}
      <Content className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Suspense fallback={Loading({})}>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <route.component {...props} />
                    )} />
                ) : (null);
              })}
              <Redirect from={location.path} to="/404" />
            </Switch>
          </Suspense>
        </div>
      </Content>
      </Layout >
      <Footer style={{textAlign: 'center'}}>
        <DefaultFooter />
      </Footer>
    </Layout>
  );
}

export const Routes = () => {
  const dispatch = useDispatch();
  const {token, initURL} = useSelector(({auth}) => auth);

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    Http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, [token])

  // useEffect(() => {
  //   // initURL === '' && dispatch(setInitUrl(location.pathname))
  // }, [initURL, location.pathname])

  useEffect(() => {
    if (['/auth'].includes(location.pathname)) {
      if (token) {
        history.push('/dashboard');
      } else {
        // history.push(initURL);
      }
    }
  }, [token, initURL, location, history]);

  return (<>
    <NotificationContainer/>
    <Switch>
      <Route exact path="/" name="Home" render={props => <Home {...props}/>} />
      <Route exact path="/blog" name="Blog" render={props => <Blog {...props}/>} />
      <Route exact path="/blog-details" name="BlogDetails" render={props => <BlogDetails {...props}/>} />
      <Route exact path="/auth" name="Auth" render={props => <Auth {...props}/>} />
      <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
      <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
      <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
      <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
      <RestrictedRoute name="Home" path={`${match.url}`} token={token} location={location}
                       component={AuthRoutes} />
    </Switch>
  </>)
}
