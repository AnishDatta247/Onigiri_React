import React from "react";

export default function () {
    let [navState, setNavState] = React.useState(false);
    let [hamState, setHamState] = React.useState(false);
    let [linkState, setLinkState] = React.useState([false, false, false, false, false])

    function openSection(section) {
        var i;
        // tablinks = document.getElementsByClassName("nav-item");
        for (i = 0; i < linkState.length; i++) {
            setLinkState(prev => [false, false, false, false, false])
        }
        // document.getElementById(sectionName).className += " active";
        setLinkState(function(prev){
            let arr = [...prev]
            arr[section] = !arr[section]
            console.log(arr)
            return arr
        })
        // const hamburger = document.querySelector(".hamburger");
        // hamburger.classList.toggle("active");
        setHamState(prev => !prev);
        // const navMenu = document.querySelector(".nav-menu");
        // navMenu.classList.toggle("active");
        setNavState(prev => !prev);
        console.log(section, linkState.length)
    }

    // const hamburger = document.querySelector(".hamburger");
    // const navMenu = document.querySelector(".nav-menu");

    // hamburger.addEventListener("click", () => {
    //     hamburger.classList.toggle("active");
    //     navMenu.classList.toggle("active");
    // })
    function hamClick(){
        setNavState(prev => !prev);
        setHamState(prev => !prev);
    }

    // document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    //     hamburger.classList.remove("active");
    //     navMenu.classList.remove("active");
    // }))

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
                        <li className="nav-item active" onClick={() => openSection(0)}>
                            <a href="#home-section" className="navlink">
                                Home
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => openSection(1)}>
                            <a href="#about-section" className="navlink">
                                About
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => openSection(2)}>
                            <a href="#menu-section" className="navlink">
                                Menu
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => openSection(3)}>
                            <a href="#chefs-section" className="navlink">
                                Chefs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="navlink">
                                Features
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => openSection(4)}>
                            <a href="#contact-us-section" className="navlink">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    <div className={`hamburger ${hamState?"active":""}`} onClick={hamClick}>
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                    </div>
                </nav>
            </div>
        </div>
    )
}