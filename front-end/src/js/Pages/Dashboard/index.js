import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./dashboard.scss";
import Comments from "../../components/Comments";
import Rates from "../../components/Rates";

const Dashboard = () => {
    return (
        <>
            <div className={"list-wrapper"}>
                <div className={"row"}>
                    <div className={"col-lg-12"}>
                        <ul className={"list-unstyled"}>
                            <li className={"list-item success-merge"}>
                                <img className={"gravatar pull-left"} src={"../../images/testavatar.png"}/>
                                <div className={"col-lg-6"}>
                                    <div className={"username"}>
                                        Mantas Pudziavis
                                    </div>
                                    <div className={"commit-message"}>
                                        MEM-0000: Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </div>
                                </div>
                                <div className={"col-xs-3 col-sm-3 col-md-2 col-lg-3 float-right"}>
                                    <div className={"counter-wrapper"}>
                                        <Comments/>
                                        <Rates/>
                                    </div>
                                </div>
                            </li>
                            <li className={"list-item error-merge"}>
                                <img className={"gravatar pull-left"} src={"../../images/testavatar.png"}/>
                                <div className={"col-lg-6"}>
                                    <div className={"username"}>
                                        Mantas Pudziavis
                                    </div>
                                    <div className={"commit-message"}>
                                        MEM-0000: Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </div>
                                </div>
                                <div className={"col-xs-3 col-sm-3 col-md-2 col-lg-3 float-right"}>
                                    <div className={"counter-wrapper"}>
                                        <Comments/>
                                        <Rates/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Dashboard;