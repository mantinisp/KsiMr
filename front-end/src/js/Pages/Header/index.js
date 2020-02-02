import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./header.scss";

const Header = () => {
    return (
        <>
            <div className={"header"}>
                <Link to="/">
                    <div className={"logo"}>
                    </div>
                </Link>
                <div className={"menu"}>
                    <Link to="/settings"
                          className={"btn btn-primary button"}
                    >
                        Settings
                    </Link>
                </div>
            </div>
            <div className={"clearfix"}></div>
        </>
    )
};

export default Header;
