import React from 'react'
import Menu from "./Menu";
import Header from "./Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="container">
            <Menu/>
            <div className="innerContainer">
                <Header/>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout
