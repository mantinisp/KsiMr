import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./settings.scss";
import {addProjectNumber, getProjectList, selectProject} from "../../../core/actions/projectListAction";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import store from "../../../core/store";
import {getMergeRequests, refreshMergesList} from "../../../core/actions/mergeRequestsAction";

const ProjectList = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projectList);
    const activeProjects = store.getState().myProjects;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (projects.projectList.length <= 0) {
            dispatch(getProjectList({page: 1, perPage: 41}));
        }
        dispatch(addProjectNumber(store.getState().myProjects.pickedProjects.length));
    }, []);

    const addProject = (element, index) => {
        if (checkProject(element.id)) {
            return false;
        }
        dispatch(selectProject(element));
        dispatch(refreshMergesList());
    };

    const checkProject = (element, pro) => {
        return !!activeProjects.pickedProjects.find(item => item.id === element);
    };

    return (
        <>
            {projects.isLoading && (
                <LoadingSpinner/>
            )}
            {!projects.isLoading && (
                <div className={"projects-list"}>
                    <ul className="list-group">
                        {projects.projectList.map((element, index) => (
                            <li className={"list-group-item d-flex align-items-center project-item " + (checkProject(element.id) ? "project-selected" : "")}
                                key={index}
                                onClick={() => addProject(element, index)}>
                            <span className="badge badge-light badge-pill">
                                {element.id}
                            </span>
                                <span className={"project-title"}>
                                <b>{element.namespace.path}: </b>{element.name}
                            </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
};

export default connect()(ProjectList);
