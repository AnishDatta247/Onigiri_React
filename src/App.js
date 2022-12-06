import React from "react";
import App1 from "./components/App1.js"
// import MenuLink from "./components/MenuLink";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App2 from "./components/App2.js";

const App = () => {
    return (
        <Router >
            <Routes basemname={`/${process.env.PUBLIC_URL}`}>
                <Route exact path="/Onigiri_react" element={
                    <App1/>
                } />
                <Route exact path="/Onigiri_react/menu" element={
                    <App2/>
                } />
            </Routes>
        </Router>
        // <App1 />
    )
}

export default App;