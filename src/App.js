import React from "react";
import { Header } from "./features/Header/Header";
import { SkeletonTheme } from "react-loading-skeleton";
import { Current } from "./features/Current/Current";
import { Hourly } from "./features/Hourly/Hourly";

export const App = () => {
    return(
        <>
        <SkeletonTheme baseColor="#ccc8c8" highlightColor="#e8e6e6">
            <Header />
            <Current />
            <Hourly />
        </SkeletonTheme>
        </>
    )
}