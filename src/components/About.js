import React from 'react'
import thumb1 from "../images/about-thumb-01.jpg"
import thumb2 from "../images/about-thumb-02.jpg"
import thumb3 from "../images/about-thumb-03.jpg"

const About = () => {
    console.log(window.scrollY)
    return (
        <section className="about" id="about-section">
            <div className="container">
                <div className="text-container" id="a">
                    <h2>About Us</h2>

                    <h1>We Leave A Delicious Memory For You</h1>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo id saepe cumque accusantium,
                        amet
                        animi soluta dignissimos dolore, voluptas quaerat et, quisquam omnis error eius quis earum totam
                        excepturi illum possimus eos maxime voluptates suscipit quia. Culpa dicta labore nesciunt nisi
                        aliquid
                        voluptatem. Tenetur illum, ipsa alias architecto unde libero.</p>
                </div>

                <div className="food-pics" id="b">
                    <img src={thumb1} alt="" />
                    <img src={thumb2} alt="" />
                    <img src={thumb3} alt="" />
                </div>

                <div className="video-container" id="c">
                    <iframe src="https://www.youtube.com/embed/78ixbqwFLbc">
                    </iframe>
                </div>
            </div>
        </section>
    )
}

export default About