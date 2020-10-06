import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <Link to="/admin">Admin</Link> | <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> |{" "}
      <Link to="/test">Test</Link> | <Link to="/test2">Test2</Link> |{" "}
      <Link to="/page1">Page1</Link>
    </div>
  );
}

export default Nav;
