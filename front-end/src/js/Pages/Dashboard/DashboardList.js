import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./dashboard.scss";
import MergeButton from "../../components/MergeButton";
import Comments from "../../components/Comments";
import Rates from "../../components/Rates";

const DashboardList = () => {
    return (
        <>
            <div className={"col-lg-12"}>
                <MergeButton/>
                <div className={"list-item success-merge"}>
                    <div className={"col-lg-1 p-0"}>
                        <img className={"gravatar pull-left"} src={"../../images/testavatar.png"}/>
                    </div>
                    <div className={"col col-xs-11 col-lg-7"}>
                        <div className={"username"}>
                            Mantas Pudziavis
                        </div>
                        <div className={"commit-message"}>
                            MEM-0000: Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            MEM-0000: Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </div>
                    </div>
                    <div className={"col col-xs-12 p-0"}>
                        <div className={"counter-wrapper"}>
                            <Comments/>
                            <Rates/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DashboardList;
