import React from 'react';
import Nav from "./components/NavBar/nav"
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
       <>
        <Nav />
        <Outlet/>
       </>
    );
}

export default Layout;