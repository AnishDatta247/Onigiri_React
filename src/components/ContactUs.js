import React from 'react'
import img1 from "../images/call-icon.png"
import img2 from "../images/mail-icon.png"

const ContactUs = () => {
    let [info, setInfo] = React.useState({})

    function handleChange(event){
        let name = event.target.name
        let value = event.target.value
        setInfo(values => ({...values, [name]: value}))
        console.log(info)
    }

    return (
        <section className="contact-us" id="contact-us-section">
            <h2>Contact Us</h2>

            <h1>Here You Can Make A Reservation Or Just Walk to Our Cafe</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores repudiandae rerum suscipit
                neque veniam delectus id explicabo voluptatibus doloremque.</p>

            <div className="boxes">
                <div className="contacts">
                    <img src={img1} alt="call" class="contact-image" />
                    <h3>Phone Numbers</h3>
                    <span>080-090-0990</span>
                    <span>123-456-7890</span>
                </div>
                <div className="contacts">
                    <img src={img2} alt="mail" class="contact-image" />
                    <h3>Emails</h3>
                    <span>info@company.com</span>
                    <span>onigiri@company.com</span>
                </div>
            </div>

            <div className="form" id="reservation-section">
                <h1>Table Reservation</h1>
                <form action="">
                    <input type="text" name="name" placeholder="Your name*" value={info.name || ""} onChange={handleChange} />
                    <input type="email" name="email" id="email" placeholder="Your email address" value={info.email || ""} onChange={handleChange}/>
                    <input type="text" name="phone" placeholder="Phone Number* " value={info.phone || ""} onChange={handleChange} />
                    <input type="number" name="guests" id="guests" placeholder="Number of Guests" value={info.guests || ""} onChange={handleChange} />
                    <input type="date" name="date" id="date" placeholder="dd/mm/yyyy" value={info.date || ""} onChange={handleChange} />
                    <input type="datetime" name="time" id="time" placeholder="Time" value={info.time || ""} onChange={handleChange} />
                    <textarea name="messgae" id="message" cols="30" rows="10" placeholder="Message" />
                    <input type="submit" value="Submit" className="submit-button" />
                </form>
            </div>
        </section>
    )
}

export default ContactUs