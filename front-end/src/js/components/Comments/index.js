import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./comments.scss";

const Comments = (notes) => {
    return (
        <>
            <div className={"comments"}>
                <span className={"counter"}>{notes.notes}</span>
                <p>Comments</p>
            </div>
        </>
    )
};

export default Comments;
