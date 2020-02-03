import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./settings.scss";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import {addProjectNumber, removeProject} from "../../../core/actions/projectListAction";
import store from "../../../core/store";

const MyProjects = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.myProjects);

    const deleteProject = (index) => {
        dispatch(removeProject(index));
    };

    return (
        <>
            {projects.pickedProjects.map((element, index) => (
                <div className="btn btn-warning m-1" key={index} onClick={() => deleteProject(index)}>
                    {element.id}: {element.namespace.path}
                </div>
            ))}
        </>
    )
};

export default connect()(MyProjects);
