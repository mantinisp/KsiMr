import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./header.scss";
import MyToken from "../../components/MyToken/MyToken";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsersCog, faCogs} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
            <div className={"header"}>
                <Link to="/">
                    <div className={"logo"}>
                    </div>
                </Link>
                <div className={"menu"}>
                    <MyToken/>
                    <Link to="/settings"
                          className={"btn btn-primary button"}
                    >
                        <FontAwesomeIcon icon={faUsersCog}/>
                    </Link>
                </div>
            </div>
            <div className={"clearfix"}></div>
        </>
    )
};

export default Header;
