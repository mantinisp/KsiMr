import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./comments.scss";

const Comments = () => {
    return (
        <>
            <div className={"comments"}>
                <span className={"counter"}>0</span>
                <p>Comments</p>
            </div>
        </>
    )
};

export default Comments;