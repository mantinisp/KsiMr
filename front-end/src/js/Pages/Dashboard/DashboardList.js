import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./dashboard.scss";
import MergeButton from "../../components/MergeButton";
import Comments from "../../components/Comments";
import Rates from "../../components/Rates";
import {getMergeRequests, generateList} from "../../../core/actions/mergeRequestsAction";
import store from "../../../core/store";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Moment from 'react-moment';
import 'moment-timezone';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTasks} from '@fortawesome/free-solid-svg-icons';
import {mergeStatus} from "../../../core/utilities/mergeStatus";

const DashboardList = () => {
    const dispatch = useDispatch();
    const mergeList = useSelector(state => state.mergeRequests);
    const mergeList2 = useSelector(state => state.myProjects);
    const activeProjects = store.getState().myProjects;
    const eff = store.getState().myProjects.pickedProjects.length;
    useEffect(() => {
        let storeCount = store.getState().myProjects.pickedProjects.length;
        let previousCount = store.getState().projectList.projectCount;
        if (mergeList.newList.length <= 0) {
            dispatch(getMergeRequests());
        }
    }, []);
    const loadingAnimation = mergeList.isLoading;
    const sortingMerges = mergeList.mergeRequests.sort((a, b) => new Date(a.created_at) - new Date(b.created_at)).reverse();
    return (
        <>
            {mergeList.isLoading && (
                <LoadingSpinner/>
            )}
            {mergeList.mergeRequests.sort((a, b) => a.created_at > b.created_at).map((element, index) => (
                <div className={"col-lg-12"} key={index}>
                    <div className={"list-item " + (element.user_notes_count >= 4 ? "error-merge-1 error-merge-"+element.user_notes_count : "") + (element.upvotes > 0 ? "success-merge " : "")}>
                        <div className={"col-lg-1 p-0"}>
                            <a href={element.author.web_url}>
                                <img className={"gravatar pull-left"}
                                     src={(!element.author.avatar_url)
                                         ? "../../images/testavatar.png"
                                         : element.author.avatar_url}/>
                            </a>
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
                            <div className={"merge-options"}>
                                <button
                                    className={"btn btn-sm " + (mergeStatus(element.merge_status) ? "btn-success" : "btn-danger")}>
                                    <span className={"text-uppercase p-1"}>
                                            <FontAwesomeIcon icon={faCheckCircle}/> <MergeStatusText
                                        status={mergeStatus(element.merge_status)}/>
                                    </span>
                                </button>
                                {element.work_in_progress && (
                                <button
                                    className={"btn btn-sm btn-primary ml-2"}
                                >
                                    <span className={"text-uppercase p-1"}>
                                            <FontAwesomeIcon icon={faTasks}/> Work in progress
                                    </span>
                                </button>
                                )}
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

const MergeStatusText = (status) => {
    return status.status ? "Can be merge" : "Cannot be merge";
};

export default connect()(DashboardList);
