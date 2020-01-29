import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./NewRequest.scss";

const NewRequest = () => {
    const [show, setShow] = useState(false);
    // useEffect(() => {
    //     if (!show) {
    //         setInterval(() => setShow(true), 6000);
    //     }
    //     if (show) {
    //         setInterval(() => setShow(false), 6000);
    //     }
    // });
    return (
        <>
            <div className={"new-request-wrapper animated " + ((show) ? "fadeInNew" : "hide fadeOutNew")}>
                <span>New merge request <br/>
                    <b>MEM-101!</b>
                </span>
            </div>
        </>
    )
};

export default NewRequest;
