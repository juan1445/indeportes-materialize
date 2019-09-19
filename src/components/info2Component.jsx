import React from "react";
import Info1 from './images/info1.png'
import Info22 from './images/info2.png'
import Info3 from './images/info3.png'

class Info2 extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 className=" green-text text-darken-4">Información General</h2>
        <p className="">
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
        </p>
        <p className="">
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
        </p>
        <div className="center hide-on-med-and-down col s12">
            <img className="col-content" width="100px" src={Info22} alt="" />
            <img className="col-content" width="100px" src={Info1} alt="" />
        </div>
        <div className="center">
            <img width="100px" src={Info3} alt="" />
        </div>
        <p className="">Para mas información, <span><a href="/" className="green-text text-darken-4">click aquí</a></span></p>
      </div>
    );
  }
}

export default Info2;
