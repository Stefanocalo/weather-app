import React from "react";
import { Header } from "./features/Header/Header";
import { SkeletonTheme } from "react-loading-skeleton";
import { Current } from "./features/Current/Current";
import { Hourly } from "./features/Hourly/Hourly";
import { Next } from "./features/Next/Next";
import { General } from "./features/General/General";
import { Bookmarks } from "./features/Bookmarks/Bookmarks";

export const App = () => {
    return(
        <>
        <SkeletonTheme baseColor="#ccc8c8" highlightColor="#e8e6e6">
            <Header />
            <Current />
            <Hourly />
            <Next />
            <General />
            <Bookmarks />
        </SkeletonTheme>
        </>
    )
}