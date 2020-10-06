import React from "react";
import Nav from "../Pages/Nav";
const MainLayout = (props) => {
  return (
    <div className="container">
      <h1>MainLayout Page</h1>
      <Nav />
      <hr />
      {props.children}
      <hr />
    </div>
  );
};

export default MainLayout;
