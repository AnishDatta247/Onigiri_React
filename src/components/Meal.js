import React from 'react'
import MealItem from './MealItem'
import breakfast from "../images/tab-icon-01.png"
import lunch from "../images/tab-icon-02.png"
import dinner from "../images/tab-icon-03.png"
import data from '../data'

const Meal = () => {
    let [meal, setMeal] = React.useState(0)

    let breakfastitems = data.breakfast.map(obj => {
        return (
            <MealItem {...obj} />
        )
    })

    let lunchitems = data.lunch.map(obj => {
        return (
            <MealItem {...obj} />
        )
    })

    let dinneritems = data.dinner.map(obj => {
        return (
            <MealItem {...obj} />
        )
    })

    function openMeal(n) {
        if(n!==meal) setMeal(prev => n)
        // console.log(meal)
    }

    return (
        <section className="klassy-week">

            <h2>Onigiri Week</h2>

            <h1>This Week's Special Meal Offers</h1>

            <div className="tabs">
                <div className={`tab ${meal === 0 ? "active" : ""}`} onClick={() => openMeal(0)}>
                    <img src={breakfast} alt="breakfast" />
                    <h4>Breakfast</h4>
                </div>
                <div className={`tab ${meal === 1 ? "active" : ""}`} onClick={() => openMeal(1)}>
                    <img src={lunch} alt="lunch" />
                    <h4>Lunch</h4>
                </div>
                <div className={`tab ${meal === 2 ? "active" : ""}`} onClick={() => openMeal(2)}>
                    <img src={dinner} alt="dinner" />
                    <h4>Dinner</h4>
                </div>
            </div>

            {meal === 0 &&
                <div className="tab-content" id="breakfast">
                    {breakfastitems}
                </div>}

            {meal === 1 &&
                <div className="tab-content" id="lunch">
                    {lunchitems}
                </div>}

            {meal === 2 &&
                <div className="tab-content" id="dinner">
                    {dinneritems}
                </div>}

        </section>
    )
}

export default Meal