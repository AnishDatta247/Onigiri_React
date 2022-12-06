import React from "react";

export default function () {
    let [navState, setNavState] = React.useState(false);
    let [hamState, setHamState] = React.useState(false);
    let [linkState, setLinkState] = React.useState([true, false, false, false, false])

    function openSection(section) {
        var i;

        for (i = 0; i < linkState.length; i++) {
            setLinkState([false, false, false, false, false])
        }

        setLinkState(function (prev) {
            let arr = [...prev]
            arr[section] = !arr[section]
            console.log(arr)
            return arr
        })

        setHamState(prev => !prev);

        setNavState(prev => !prev);
        console.log(section, linkState.length)
    }


    function hamClick() {
        setNavState(prev => !prev);
        setHamState(prev => !prev);
    }

    function topClick() {
        setLinkState([true, false, false, false, false])
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div className="container header">
            <div className="subcontainer">
                <nav className="navbar">
                    <a href="#" className="nav-branding">
                        <h2>食</h2>
                        <div className="h1-name">
                            <h1 className="oni">oni</h1>
                            <h1 className="giri">giri</h1>
                        </div>
                    </a>
                    <ul className={`nav-menu ${navState ? "active" : ""}`}>
                        <li className={`nav-item ${linkState[0] === true ? "active" : ""}`} onClick={() => openSection(0)}>
                            <a href="#home-section" className="navlink">
                                Home
                            </a>
                        </li>
                        <li className={`nav-item ${linkState[1] === true ? "active" : ""}`} onClick={() => openSection(1)}>
                            <a href="#about-section" className="navlink">
                                About
                            </a>
                        </li>
                        <li className={`nav-item ${linkState[2] === true ? "active" : ""}`} onClick={() => openSection(2)}>
                            <a href="#menu-section" className="navlink">
                                Menu
                            </a>
                        </li>
                        <li className={`nav-item ${linkState[3] === true ? "active" : ""}`} onClick={() => openSection(3)}>
                            <a href="#chefs-section" className="navlink">
                                Chefs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="navlink">
                                Features
                            </a>
                        </li>
                        <li className={`nav-item ${linkState[4] === true ? "active" : ""}`} onClick={() => openSection(4)}>
                            <a href="#contact-us-section" className="navlink">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    <div className={`hamburger ${hamState ? "active" : ""}`} onClick={hamClick}>
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                    </div>
                </nav>
            </div>

            <div className="myBtn" onClick={topClick}>
                <i class="fa fa-solid fa-arrow-up"></i>
            </div>
        </div>


    )
}