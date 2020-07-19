import React from 'react';
import './style.css'

const PageHeader = (props) => {
    return (
        <div>
            <section id='page-header-secion' className="page-header">
                <div className="container">
                    <ul className="list-unstyled thm-breadcrumb">
                        <li>
                            <a href="/">Home /</a>
                        </li>
                        <li className="active"><a href="#">{ props.title }</a></li>
                    </ul>
                    <h2 className="inner-banner__title">{ props.title }</h2>
                </div>
            </section>

        </div>

    )
}
export default PageHeader;
