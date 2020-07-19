import React from 'react';
import Navbar from "./Home/Navbar";

export default (props) => {
  return (
    <div className="page-wrapper">
    <Navbar />
    {props.children}
    </div>
  )
}
