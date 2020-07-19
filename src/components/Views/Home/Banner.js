import React from 'react';
import QuickBook from './QuickBook'
import {Row, Col} from 'antd'

const Banner = () => {

    return(
        <section className="banner-one" id="banner">
            <img src={require("../../../assets/images/shapes/banner-shapes-1-1.png")} alt="" className="banner-one__shape-1" />
            <img src={require("../../../assets/images/shapes/banner-shapes-1-2.png")} alt="" className="banner-one__shape-2" />

            <img src={require("../../../assets/images/shapes/banner-shapes-1-4.png")} alt="" className="banner-one__shape-4" />
            <img src={require("../../../assets/images/shapes/banner-shapes-1-5.png")} alt="" className="banner-one__shape-5" />
            <img src={require("../../../assets/images/shapes/banner-shapes-1-6.png")} alt="" className="banner-one__shape-6" />
            <img src={require("../../../assets/images/shapes/banner-shapes-1-7.png")} alt="" className="banner-one__shape-7" />

            <div className="container">
                <img src={require("../../../assets/images/shapes/banner-shapes-1-3.png")} alt="" className="banner-one__shape-moc-1"/>
                <QuickBook />
                <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-one__content">
                            <p className="banner-one__tag-line">Welcome to Gfx Facilities <a href="#">Hire Now</a></p>
                            <h3>We help <br/> Make It Clean</h3>
                            <p>We are committed to providing our customers with exceptional service <br/> while offering our
                            employees
                            the best training.</p>
                            <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    )
}
export default Banner;
