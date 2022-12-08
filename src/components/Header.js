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

        if (section === 0) {
            document.getElementById("home-section").scrollIntoView({ behaviour: "smooth" })
        }
        if (section === 1) {
            document.getElementById("about-section").scrollIntoView({ behaviour: "smooth" })
        }
        if (section === 2) {
            document.getElementById("menu-section").scrollIntoView({ behaviour: "smooth" })
        }
        if (section === 3) {
            document.getElementById("chefs-section").scrollIntoView({ behaviour: "smooth" })
        }
        if (section === 4) {
            document.getElementById("contact-us-section").scrollIntoView({ behaviour: "smooth" })
        }
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
                            <span className="navlink">Home</span>
                        </li>
                        <li className={`nav-item ${linkState[1] === true ? "active" : ""}`} onClick={() => openSection(1)}>
                            <span className="navlink">About</span>
                        </li>
                        <li className={`nav-item ${linkState[2] === true ? "active" : ""}`} onClick={() => openSection(2)}>
                            <span className="navlink">Menu</span>
                        </li>
                        <li className={`nav-item ${linkState[3] === true ? "active" : ""}`} onClick={() => openSection(3)}>
                        <span className="navlink">Chefs</span>
                        </li>
                        <li className="nav-item">
                        <span className="navlink">Features</span>
                        </li>
                        <li className={`nav-item ${linkState[4] === true ? "active" : ""}`} onClick={() => openSection(4)}>
                        <span className="navlink">Contact Us</span>
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