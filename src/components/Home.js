import React,{useState} from "react";
import slide1 from "../images/slide-01.jpg"
import slide2 from "../images/slide-02.jpg"
import slide3 from "../images/slide-03.jpg"

export default function () {
    const [slideIndex, setSlideIndex] = useState(0)
    // let slideIndex = 1;
    // showSlides(slideIndex);

    function plusSlides(n) {
        // showSlides(slideIndex += n);
        setSlideIndex(prev => (prev+1)%3)
    }

    // function currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    // function showSlides(n) {
    //     let i;
    //     let slides = document.querySelectorAll(".slide");
    //     console.log(slides);
    //     if (n > slides.length) { slideIndex = 1 }
    //     if (n < 1) { slideIndex = slides.length }
    //     //console.log(slides)
    //     for (i = 0; i < slides.length; i++) {
    //         // slides[i].style.display = "none";
            
    //         slides[i].setAttribute("style", "display: none;")
    //     }
    //     // slides[slideIndex - 1].style.display = "block";
    //     slides[slideIndex-1].setAttribute("style", "display: block;")
    //     console.log(n);
    // }

    return (
        <div className="home" id="home-section">
            <div className="make-reservation">
                <div className="h1-name">
                    <h1 className="oni">oni</h1>
                    <h1 className="giri">giri</h1>
                </div>

                <span>The Best Sushi Experience</span>

                <a href="#reservation-section">Make A Reservation</a>
            </div>



            <div className="carousel">

                <div className="slide fade" style={{display:slideIndex==0?"block":"none"}}>
                    <img src={slide1} alt="" />
                </div>
                <div className="slide fade" style={{display:slideIndex==1?"block":"none"}}>
                    <img src={slide2} alt="" />
                </div>
                <div className="slide fade" style={{display:slideIndex==2?"block":"none"}}>
                    <img src={slide3} alt="" />
                </div>

                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

            </div>
        </div>
    )
}