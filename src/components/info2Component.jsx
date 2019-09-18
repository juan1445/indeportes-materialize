import React from "react";
import Info1 from './images/info1.png'
import Info22 from './images/info2.png'
import Info3 from './images/info3.png'

class Info2 extends React.Component {
  render() {
    return (
      <div className="container center">
        <h2 className="my-5 text-success">Información General</h2>
        <p className="mb-4 spacing">
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
        </p>
        <p className="media2">
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
        </p>
        <div className="d-flex justify-content-between marginTop media">
            <img className="ml-5" width="100px" src={Info22} alt="" />
            <img className="mr-5" width="100px" src={Info1} alt="" />
        </div>
        <div className="text-center mt-2 spacing">
            <img width="100px" src={Info3} alt="" />
        </div>
        <p className="mt-5 spacing">Para mas información, <span><a href="/" className="text-success font-weight-bold">click aquí</a></span></p>
      </div>
    );
  }
}

export default Info2;
