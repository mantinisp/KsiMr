import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import "./settings.scss";
import ProjectList from "./ProjectList";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import {addPage, refreshProjects} from "../../../core/actions/projectListAction";
import store from "../../../core/store";
import MyProjects from "./MyProjects";

const Settings = () => {
    const dispatch = useDispatch();
    const pages = useSelector(state => state.projectList);

    const nextPage = () => {
        dispatch(addPage({page: pages.page + 1}));
        dispatch(refreshProjects());
    };

    const previousPage = () => {
        if (pages.page <= 1) {
            return false;
        }
        dispatch(addPage({page: pages.page - 1}));
        dispatch(refreshProjects());
    };

    return (
        <>
            <div className={"container settings-wrapper"}>
                <div className={"row"}>
                    <div className="col-lg-5">
                        <div className="left-side">
                            <h1>Dashboard Settings</h1>
                            <form className="form-inline mb-1">
                                <div className="form-group mx-sm-2">
                                    <input type="text"
                                           className="form-control"
                                           placeholder="Search by project name..."
                                    />
                                </div>
                                <button type="button" className="btn btn-primary">Search</button>
                            </form>
                            <div className={"pages-button"}>
                                <span className="text-white mr-2">Pagination:</span>
                                <button className={"btn btn-light button"}
                                        onClick={() => previousPage()}
                                        disabled={pages.page <= 1}>&#10094;</button>
                                <button className={"btn btn-light button"} onClick={() => nextPage()}>&#10095;</button>
                            </div>
                            <h4 className={"text-white text-center mt-2"}>Selected projects</h4>
                            <MyProjects/>
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
