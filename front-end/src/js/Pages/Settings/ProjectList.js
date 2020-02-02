import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./settings.scss";
import {getProjectList} from "../../../core/actions/projectListAction";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const ProjectList = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projectList);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        dispatch(getProjectList({ page: 2, perPage: 39 }));
    }, []);
    return (
        <>
            {projects.isLoading && (
                <LoadingSpinner/>
            )}
            <div className={"projects-list"}>
                <ul className="list-group">
                    {projects.projectList.map((element, index) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                            <span className="badge badge-light badge-pill">{ index }</span>
                            <b>{element.name}: </b>{ element.namespace.path }
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default connect()(ProjectList);
