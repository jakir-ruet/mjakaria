import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from '../components/hoc/website/navbar/Navbar';

const Routes = () => {
  React.createElement;
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <>
          <Navbar/>
        </>
    }
  ]);
};
export default Routes;