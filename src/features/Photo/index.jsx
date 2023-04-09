import React, { Fragment } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import MainPage from "./pages/Main";

function Photo() {

    return (
        <Fragment>
            <Outlet />
        </Fragment>
    );
}

export default Photo;