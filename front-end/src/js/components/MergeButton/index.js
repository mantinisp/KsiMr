import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./MergeButton.scss";

const MergeButton = () => {
    return (
        <>
            <div className={"merge-wrapper"}>
                <span>Merge this branch</span>
            </div>
        </>
    )
};

export default MergeButton;