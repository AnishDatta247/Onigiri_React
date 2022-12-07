import React from 'react'

const MenuItem = (props) => {
    let [showDesc, setShowDesc] = React.useState(false);

    // let [cart, setCart] = React.useState(0);

    function handleHover() {
        setShowDesc(prev => !prev)
    }

    // function addItemHandle(n){
    //     setCart(prev => prev+n)
    // }

    return (
        <div className="menu-slide" onMouseEnter={handleHover} onMouseLeave={handleHover} >
            <h3>{props.price}</h3>
            <div className={`item-desc ${showDesc ? "showDesc" : ""}`}>
                <h4>{props.name}</h4>
                <a id="reservation-menu" href="#contact-us-section">Make Reservation </a>
                <p id="para-menu">{props.desc}</p>
            </div>
            <div className={`cart ${props.count!==0?"taken":""}`}>
                {props.count === 0 && <span onClick={() => props.handleCart(props.id, 1)}>ADD</span>}
                {props.count!==0 && <div className='added'>
                        <button onClick={() => props.handleCart(props.id, -1)}>-</button>
                        <p>{props.count}</p>
                        <button onClick={() => props.handleCart(props.id, 1)}>+</button>
                    </div>}
            </div>
            <img className="menu-slide-img" src={props.image} alt=""/>
        </div>
            )
}

            export default MenuItem