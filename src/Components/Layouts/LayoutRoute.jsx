import React from "react";
import { Route } from "react-router-dom";
const LayoutRoute = (props) => {
  const { layout: Layout, component: Component, path, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(matchingProps) => {
        return (
          <Layout>
            <Component {...matchingProps} />
          </Layout>
        );
      }}
    />
  );
};

export default LayoutRoute;
