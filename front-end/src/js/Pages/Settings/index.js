import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./settings.scss";
import ProjectList from "./ProjectList";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import {addPage, refreshProjects} from "../../../core/actions/projectListAction";
import store from "../../../core/store";

const Settings = () => {
    const dispatch = useDispatch();
    const pages = useSelector(state => state.projectList);
    const [pageNumber, setPageNumber] = useState(1);

    const nextPage = () =>  {
        dispatch(addPage({ page: pages.page + 1 }));
        dispatch(refreshProjects());
    };

    const previousPage = () => {
        dispatch(addPage({ page: pages.page - 1 }));
        dispatch(refreshProjects());
    };

    return (
        <>
            <div className={"container settings-wrapper"}>
                <div className={"row"}>
                    <div className="col-lg-5">
                        <div className="left-side">
                            <h1>Dashboard Settings</h1>
                            <div className={"pages-button"}>
                                <button className={"btn btn-light button"} onClick={() => previousPage()}>&#10094;</button>
                                <button className={"btn btn-light button"} onClick={() => nextPage()}>&#10095;</button>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-7"}>
                        <ProjectList/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default connect()(Settings);
