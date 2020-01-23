import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./rates.scss";

const Rates = () => {
    return (
        <>
            <div className={"rates-up"}>
                <span className={"counter"}>+2</span>
                <p>LIKE</p>
            </div>
            <div className={"rates-down"}>
                <span className={"counter"}>-1</span>
                <p>DISLIKE</p>
            </div>
        </>
    )
};

export default Rates;