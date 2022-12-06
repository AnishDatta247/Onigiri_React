import React from "react";
import App1 from "./components/App1.js"
// import MenuLink from "./components/MenuLink";

import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom"
import App2 from "./components/App2.js";

const App = () => {
    return (
        // <HashRouter>
        //     <Routes>
        //         <Route path="/" element={
        //             <App1/>
        //         } />
        //         <Route path="/menu" element={
        //             <App2/>
        //         } />
        //     </Routes>
        // </HashRouter>
        <App1 />
    )
}

export default App;