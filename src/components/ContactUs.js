import React from 'react'
import { useForm } from 'react-hook-form'

const ContactUs = () => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm()
    const onFormSubmit = (data) =>{
        console.log(data)
        reset()
    }
    
    return (
        <section className="contact-us">
            <div className="container">
                <div className="row">
                    <div className='col-sm-5 col-md-12 col-lg-5 col-xl-6 content'>
                        <div className="col-12 title">
                            <h1>Keep in touch</h1>
                        </div>
                        <div className="col-12 col-xl-6 form">
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <p>Name: </p>
                                <input type="text" {...register("Name", {required:true})}/>
                                {errors.Name && <span>This field is required</span>}
                                <p>Email Address:</p>
                                <input type="text" {...register("Email", {required:"This field is required", pattern:{value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "Enter Valid Email"}})}/>
                                {errors.Email && <span>{errors.Email.message}</span>}
                                <p>Subject:</p>
                                <input type="text" {...register("Subject", {required:true})}/>
                                {errors.Subject && <span>This field is required</span>}
                                <p>Message</p>
                                <textarea></textarea> <br/>
                                <button className="send">Send</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-sm-7 col-xl-6 image'>
                        <img src={require('../images/contact-pic.png')} alt="contactPic"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs