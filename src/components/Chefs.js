import React from 'react'
import data from "../data"
import Chef from "./Chef"

const Chefs = () => {
    let chefs = data.chefs.map(obj => {
        return (
            <Chef {...obj} />
        )
    })

    return (
        <section className="chefs" id="chefs-section">
            <h2>Our Chefs</h2>

            <h1>We offer the best ingredients for you</h1>

            <div className='container'>
                {chefs}
            </div>
            {/* <h1>Hello</h1> */}
        </section>
    )
}

export default Chefs