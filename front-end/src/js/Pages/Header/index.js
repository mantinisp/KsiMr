import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./header.scss";

const Header = () => {
    return (
        <>
            <div className={"header"}>
                <div className={"logo"}>
                </div>
            </div>
        </>
    )
};

export default Header;