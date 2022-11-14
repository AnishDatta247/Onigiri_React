import React from 'react'
import data from "../data"
import Chef from "./Chef"

const Chefs = () => {
    let chefs = data.chefs.forEach(obj => {
        return (
            <Chef {...obj}/>
        )
    })

    return (
    <section class="chefs" id="chefs-section">
            <h2>Our Chefs</h2>

            <h1>We offer the best ingredients for you</h1>

            {chefs}
        </section>
  )
}

export default Chefs