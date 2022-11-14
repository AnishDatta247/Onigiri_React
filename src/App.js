import React from "react";
import App1 from "./components/App1.js"
import MenuLink from "./components/MenuLink";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App2 from "./components/App2.js";

export default function () {
    return (
        <Router>
            <Routes>
                <Route path="/menu" element={
                    <App2/>
                } />
                <Route path="" element={
                    <App1/>
                } />
            </Routes>
        </Router>
    )
}