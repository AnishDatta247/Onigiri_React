import React from 'react'

const Chef = (props) => {
    return (
        <div class="chef">
            <div class="image">
                <img src={props.img} alt=""/>

                    <div class="overlay">
                        <a href={props.facebook}><i class="fa fa-facebook"></i></a>
                        <a href={props.twitter}><i class="fa fa-twitter"></i></a>
                        <a href={props.instagram}><i class="fa fa-instagram"></i></a>
                    </div>
            </div>

            <h3>props.name</h3>
            <span>props.post</span>
        </div>
    )
}

export default Chef