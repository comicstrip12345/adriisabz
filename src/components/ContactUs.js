import React from 'react'
import '../css/contactus.css'

const ContactUs = () => {
    return (
        <section className="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-12 title">
                        <h1>Keep in touch</h1>
                    </div>
                    <div className="col-12 col-xl-6 form">
                        <form action="">
                            <p>Name: </p>
                            <input type="text" name="" id=""/>
                            <p>Email Address:</p>
                            <input type="text" name="" id=""/>
                            <p>Subject:</p>
                            <input type="text" name="" id=""/>
                            <p>Message</p>
                            <textarea name="" id="" ></textarea> <br/>
                            <button className="send">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs