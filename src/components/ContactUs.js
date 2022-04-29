import React from 'react'
import '../css/contactus.css'

const ContactUs = () => {
    return (
        <section className="contact-us">
            <div className="container">
                <div className="row">
                    <div className='col-sm-5 col-md-12 col-lg-5 col-xl-6 content'>
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
                    <div className='col-sm-7 col-lg-7 col-xl-6 image'>
                        <img src={require('../images/contact-pic.png')} alt="contactPic"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs