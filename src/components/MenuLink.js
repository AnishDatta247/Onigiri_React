import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const Menu = () => {
    return (
        <section className="our-menu" id="menu-section">
            <h2>Our Menu</h2>
            <h1>Our Selection of dishes with quality taste</h1>
            <p>Premium sushi, dumplings, dessers and much more!</p>
            {/* <a href='/Onigiri_react/menu'>Check out our complete menu here.</a> */}
            <Link to='/Onigiri_react/menu'>Check out out complete menu here</Link>
        </section>
    )
}

export default Menu