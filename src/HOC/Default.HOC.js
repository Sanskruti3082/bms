import React from "react";
import {Route} from "react-router-dom";

//import
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({component, ...rest}) => {
  const Component = component;

  return(
    <>
   <Route
   {...rest}
   component={(props) => (
     <DefaultLayout>
     <Component{...props} />
     </DefaultLayout>
   )}
   />
    </>
  );
};

export default DefaultHOC;
