import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import NewRequest from "../../components/NewRequest";

const Footer = () => {
    return (
        <>
            <NewRequest/>
        </>
    )
};

export default Footer;