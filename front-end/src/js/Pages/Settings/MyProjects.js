import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./settings.scss";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import {addProjectNumber, removeProject} from "../../../core/actions/projectListAction";
import store from "../../../core/store";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle, faTimes} from '@fortawesome/free-solid-svg-icons';
import {refreshMergesList} from "../../../core/actions/mergeRequestsAction";

const MyProjects = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.myProjects);

    const deleteProject = (index) => {
        dispatch(removeProject(index));
        dispatch(refreshMergesList());
    };

    return (
        <>
            {projects.pickedProjects.map((element, index) => (
                <div className="btn btn-warning m-1" key={index} onClick={() => deleteProject(index)}>
                    {element.id}: {element.namespace.path}
                    <span className={"m-2"}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </div>
            ))}
        </>
    )
};

export default connect()(MyProjects);
