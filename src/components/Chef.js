import React from 'react'

const Chef = (props) => {
    return (
        <div className="chef">
            <div className="image">
                <img src={props.image} alt=""/>

                    <div class="overlay">
                        <a href={props.facebook}><i className="fa fa-facebook"></i></a>
                        <a href={props.twitter}><i className="fa fa-twitter"></i></a>
                        <a href={props.instagram}><i className="fa fa-instagram"></i></a>
                    </div>
            </div>

            <h3>{props.name}</h3>
            <span>{props.post}</span>
            {/* <h1>Hello</h1> */}
        </div>
    )
}

export default Chef