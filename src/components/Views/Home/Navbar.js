import React,{PureComponent} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends PureComponent {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 70) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
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

    render(){
        return (

            <div>

                <header className="main-nav__header-one ">
                    <nav className={this.state.sticky ? "header-navigation stricky stricked-menu stricky-fixed" : "header-navigation stricky"}>
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
                                    <li className="current scrollToLink">
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="#features">Services</a>
                                    </li>
                                    <li className="scrollToLink">
                                        <a href="#pricing">Pricing</a>
                                    </li>
                                    {/*<li className="scrollToLink">
                                        <a href="#app-shots">App Screens</a>
                                    </li>*/}
                                    <li className="scrollToLink">
                                        <a href="#testimonials">Testimonials</a>
                                    </li>
                                    <li className="dropdown scrollToLink">
                                        <a href="#blog">Blog</a>
                                        <ul>
                                            {/*<li>
                                                <Link to="/blog-details">
                                                <p>Blog Details</p>
                                                </Link>
                                            </li>*/}
                                        </ul>

                                    </li>
                                    <li className="scrollToLink">
                                        <a href="#contact">Contact</a>
                                    </li>

                                    <li className="">
                                        <a href="/auth">Login/Register</a>
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
    }
}
