import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch, useStore} from "react-redux";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {addUserToken} from "../../../core/actions/userSettingsAction";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faKey, faTimes} from '@fortawesome/free-solid-svg-icons';
import store from "../../../core/store";
import "./token.scss";
import {getMergeRequests} from "../../../core/actions/mergeRequestsAction";

const MyToken = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [token, setToken] = useState('');
    useEffect(() => {
        let getToken = store.getState().userSettings;
        setToken(getToken.userToken);
    }, []);
    const handleOpen = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    const saveUserToken = (Event) => {
        Event.preventDefault();
        dispatch(addUserToken(token));
        setOpen(false);
        window.location.reload();
    };

    return (
        <>
            <div className={"token-wrapper"}>
                <div className={"opened-token " + (open ? "" : "d-none")}>
                    <div className={"form-inline"}>
                        <form onSubmit={saveUserToken}>
                            <button className={"btn button bg-dark"}
                                    type={"submit"}
                            >
                                Save
                            </button>
                            <input className={"form-control token-input p-2 "}
                                   type={"text"}
                                   placeholder={"Enter your gitlab private token..."}
                                   value={token}
                                   onChange={event => setToken(event.target.value)}
                            />
                        </form>
                    </div>
                </div>
                <button className={"btn button"}
                        type={"button"}
                        onClick={handleOpen}
                >
                    {!open && (
                        <FontAwesomeIcon icon={faKey}/>
                    )}
                    {open && (
                        <FontAwesomeIcon icon={faTimes}/>
                    )}
                </button>
            </div>
        </>
    )
};

export default connect()(MyToken);
