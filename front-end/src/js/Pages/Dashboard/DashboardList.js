import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./dashboard.scss";
import MergeButton from "../../components/MergeButton";
import Comments from "../../components/Comments";
import Rates from "../../components/Rates";
import {getMergeRequests} from "../../../core/actions/mergeRequestsAction";
import store from "../../../core/store";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Moment from 'react-moment';
import 'moment-timezone';

const DashboardList = () => {
    const dispatch = useDispatch();
    const mergeList = useSelector(state => state.mergeRequests);
    const mergeList2 = useSelector(state => state.myProjects);
    const activeProjects = store.getState().myProjects;
    const eff = store.getState().myProjects.pickedProjects.length;
    useEffect(() => {
        let storeCount = store.getState().myProjects.pickedProjects.length;
        let previousCount = store.getState().projectList.projectCount;
        console.log(storeCount, previousCount);
        if (mergeList.newList.length <= 0) {
            dispatch(getMergeRequests());
        }
    }, []);
    const loadingAnimation = mergeList.isLoading;
    return (
        <>
            {mergeList.isLoading && (
                <LoadingSpinner/>
            )}
            {mergeList.newList.map((element, index) => (
                <div className={"col-lg-12"} key={index}>
                    <div className={"list-item " + (element.user_notes_count >= 5 ? "error-merge" : "")}>
                        <div className={"col-lg-1 p-0"}>
                            <img className={"gravatar pull-left"}
                                 src={(!element.author.avatar_url)
                                     ? "../../images/testavatar.png"
                                     : element.author.avatar_url}/>
                        </div>
                        <div className={"col col-xs-11 col-lg-8"}>
                            <div className={"username"}>
                                <a href={element.author.web_url}>{element.author.name}</a>
                                <span className={"created-date float-right"}>
                                    <Moment fromNow ago>{element.updated_at}</Moment>
                                </span>
                            </div>
                            <div className={"commit-message"}>
                                <a href={element.web_url}>{element.title}</a>
                            </div>
                        </div>
                        <div className={"col col-xs-12 p-0"}>
                            <div className={"counter-wrapper"}>
                                <Comments notes={element.user_notes_count}/>
                                <Rates upvote={element.upvotes} downvote={element.downvotes}/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};

export default connect()(DashboardList);
