import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./dashboard.scss";
import Comments from "../../components/Comments";
import Rates from "../../components/Rates";
import MergeButton from "../../components/MergeButton";
import DashboardList from "./DashboardList";

const Dashboard = () => {
    const loader = useSelector(state => state.mergeRequests);
    return (
        <>
            <div className={"list-wrapper"}>
                <div className={"row"}>
                    <DashboardList/>
                </div>
            </div>
        </>
    )
};

export default connect()(Dashboard);
