import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {

    return (

        <section className="blog-one blog-one__home blog-one__grid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src={require("../../../assets/images/blog/blog-1-1.jpg")} alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                </ul>
                                <h3>
                                    <Link to="/blog-details">
                                    <p>Pre and post launch mobile app marketing pitfalls
                                        to avoid
                                    </p>
                                    </Link>
                                </h3>
                                <Link to="/blog-details">
                                <p className="blog-one__link"><i
                                    className="zimed-icon-right-arrow"></i></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src={require("../../../assets/images/blog/blog-1-2.jpg")} alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                </ul>
                                <h3>
                                    <Link to="/blog-details">
                                    <p>It is all exactly as i said, but i don't like it
                                        let's unpack that
                                    </p>
                                    </Link>
                                </h3>
                                <Link to="/blog-details">
                                <p className="blog-one__link"><i
                                    className="zimed-icon-right-arrow"></i></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src={require("../../../assets/images/blog/blog-1-3.jpg")} alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                </ul>
                                <h3>
                                    <Link to="/blog-details">
                                    <p>I just wanted to give you a heads-up, or this you
                                        feel you would
                                    </p>
                                    </Link>
                                </h3>
                                <Link to="/blog-details">
                                <p className="blog-one__link"><i
                                    className="zimed-icon-right-arrow"></i></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src={require("../../../assets/images/blog/blog-1-4.jpg")} alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                </ul>
                                <h3>
                                    <Link to="/blog-details">
                                    <p>Paddle on both sides cross functional teams enable
                                        out
                                    </p>
                                    </Link>
                                </h3>
                                <Link to="/blog-details">
                                <p className="blog-one__link"><i
                                    className="zimed-icon-right-arrow"></i></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src={require("../../../assets/images/blog/blog-1-5.jpg")} alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                </ul>
                                <h3>
                                    <Link to="/blog-details">
                                    <p>A loss a day will keep you focus run it up the
                                        flagpole
                                    </p>
                                    </Link>
                                </h3>
                                <Link to="/blog-details">
                                <p className="blog-one__link"><i
                                    className="zimed-icon-right-arrow"></i></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src={require("../../../assets/images/blog/blog-1-6.jpg")} alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                </ul>
                                <h3>
                                    <Link to="/blog-details">
                                    <p>We've got to manage that low hanging fruit here to
                                        wash your
                                    </p>
                                    </Link>
                                </h3>
                                <Link to="/blog-details">
                                <p className="blog-one__link"><i
                                    className="zimed-icon-right-arrow"></i></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-pagination">
                    <a href="#"><i className="fa fa-angle-left"></i></a>
                    <a href="#">1</a>
                    <a href="#" className="active">2</a>
                    <a href="#">3</a>
                    <a href="#"><i className="fa fa-angle-right"></i></a>
                </div>
            </div>
        </section>
    )
}
export default Blog;
