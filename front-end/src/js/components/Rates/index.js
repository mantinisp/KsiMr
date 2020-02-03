import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./rates.scss";

const Rates = (upvote) => {
    return (
        <>
            <div className={"rates-up"}>
                <span className={"counter"}>{upvote.upvote}</span>
                <p>LIKE</p>
            </div>
            <div className={"rates-down"}>
                <span className={"counter"}>{upvote.downvote}</span>
                <p>DISLIKE</p>
            </div>
        </>
    )
};

export default Rates;
