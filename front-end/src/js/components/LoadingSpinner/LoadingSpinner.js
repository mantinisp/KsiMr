import React, {useState, useEffect} from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import * as pandaData from "./pandaloader.json";

const LoadingSpinner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: pandaData.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <div className={"container"}>
                <div className={"row d-flex justify-content-center"}>
                    <FadeIn>
                        <Lottie options={defaultOptions} height={300} width={300}/>
                    </FadeIn>
                </div>
            </div>
        </>
    )
};

export default LoadingSpinner;
