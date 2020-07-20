import React,{memo, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useIsLoggedIn, useMergeState} from '../../../redux/hooks'

export default memo(() => {
  const [state, setState] = useMergeState({
    sticky: false
  })

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    mobileMenu();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setState({ sticky: true });
    } else if (window.scrollY < 70) {
      setState({ sticky: false });
    }
  }

  const mobileMenu = () => {
    //Mobile Menu Toggle
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    let mainNavContent = document.querySelector(".main-nav__main-navigation").innerHTML;
    mobileNavContainer.innerHTML = mainNavContent;

    document.querySelector(".side-menu__toggler").addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.toggle('active');
        e.preventDefault();
    });

    //Close Mobile Menu
    document.querySelector(".side-menu__close-btn").addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.remove('active');
        e.preventDefault();
    });
  }

  const loggedIn = useIsLoggedIn()

  return (
    <div>
      <header className="main-nav__header-one ">
        <nav className={state.sticky ? "header-navigation stricky stricked-menu stricky-fixed" : "header-navigation stricky"}>
          <div className="container">
              <div className="main-nav__logo-box">
                  <a href="/" className="main-nav__logo">
                    Gfx Facilities
                      {/*<img src={require("../../../assets/images/logo-1-1.png")} width="105" alt="Awesome Image"/>*/}
                  </a>
                  <a href="#" className="side-menu__toggler"><i className="fa fa-bars"></i></a>
              </div>
              <div className="main-nav__main-navigation">
                <ul className="one-page-scroll-menu main-nav__navigation-box">
                  <MenuLink url='/' title='Home' current />
                  <MenuLink url='/#features' title='Services' />
                  <MenuLink url='/#pricing' title='Pricing' />
                  <MenuLink url='/#testimonials' title='Testimonials' />
                  <MenuLink url='/#blog' title='Blog' />
                  <MenuLink url='/#contact' title='Contact' />

                  <li className="">
                    {loggedIn ? (
                      <Link to='/dashboard' >Dashboard</Link>
                    ) : (
                      <Link to='/auth' >Login/Registe</Link>
                    )}
                  </li>
                </ul>
              </div>
              <div className="main-nav__right">
                <a href="/#contact" data-target="#contact"
                   className="thm-btn header__btn scroll-to-target">Book a Clean</a>
              </div>
            </div>
          </nav>
        </header>
    </div>
  )
})

const MenuLink = ({url, title, current}) => {
  let className = `scrollToLink `
  if (current) className += 'current '

  return (
    <li className={className}>
        <a href={url}>{title}</a>
    </li>
  )
}
