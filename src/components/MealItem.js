import React from 'react'

const MealItem = (props) => {
    return (
        <div className="meal-item">
            <img src={props.image} alt="fresh-chicken-salad" />
            <h3>{props.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi?</p>
            <div className="price">
                <h5>{props.price}</h5>
            </div>
        </div>
    )
}

export default MealItem