import React from "react";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import MenuLink from "./MenuLink"
import Chefs from "./Chefs"

const App1 = () => {
    return (
        <div id="bootstrap-overrides">
            <Header />
            <div className="main">
                <Home />
                <About />
                <MenuLink />
                <Chefs />
            </div>
        </div>
    )
}

export default App1