import React, {useEffect} from 'react'
import Menu from "./Menu";
import Header from "./Header";
import {Outlet, useNavigate} from "react-router-dom";

const Layout = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate('/labData')
    }, [])

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
