import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./dashboard.scss";
import MergeButton from "../../components/MergeButton";
import Comments from "../../components/Comments";
import Rates from "../../components/Rates";
import {getMergeRequests} from "../../../core/actions/mergeRequestsAction";
import store from "../../../core/store";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const DashboardList = () => {
    const dispatch = useDispatch();
    const mergeList = useSelector(state => state.mergeRequests);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            dispatch(getMergeRequests())
            setLoading(false)
        }, 3000);
    }, []);

    const loadingAnimation = mergeList.isLoading;
    const avatarChecker = (avatar_url) => {
        if (!avatar_url) {
            return "../../images/testavatar.png";
        }

        return avatar_url;
    };
    console.log(mergeList.mergeRequests);
    return (
        <>
            {loading && (
                <LoadingSpinner/>
            )}
            {mergeList.mergeRequests.map((element, index) => (
                <div className={"col-lg-12"} key={index}>
                    <div className={"list-item success-merge"}>
                        <div className={"col-lg-1 p-0"}>
                            <img className={"gravatar pull-left"}
                                 src={ (!element.namespace.avatar_url)
                                 ? "../../images/testavatar.png"
                                 : element.namespace.avatar_url }/>
                        </div>
                        <div className={"col col-xs-11 col-lg-7"}>
                            <div className={"username"}>
                                { element.namespace.name }
                                <span className={"created-date float-right"}>2020-01-02 21:00:00</span>
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
            ))}
        </>
    )
};

export default DashboardList;
