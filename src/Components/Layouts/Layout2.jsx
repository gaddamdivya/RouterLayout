import React from "react";
import Nav from "../Pages/Nav";
const Layout2 = (props) => {
  return (
    <div className="container">
      <h1>Layout2 Page</h1>
      <Nav />
      <hr />
      {props.children}
      <hr />
    </div>
  );
};

export default Layout2;
