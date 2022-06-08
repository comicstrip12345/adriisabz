import React,{useState} from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const [errorNamePlaceholder,setErrorNamePlaceholder] = useState("")
    const [errorEmailPlaceholder,setErrorEmailPlaceholder] = useState("")
    const [errorSubjectPlaceholder,setErrorSubjectPlaceholder] = useState("")
    const [errorNameBorderColor,setErrorNameBorderColor] = useState("")
    const [errorEmailBorderColor,setErrorEmailBorderColor] = useState("")
    const [errorSubjectBorderColor,setErrorSubjectBorderColor] = useState("")
    const [errorMessageBorderColor,setErrorMessageBorderColor] = useState("")
    const[errorName,setErrorName] = useState(true)
    const[errorEmail,setErrorEmail] = useState(true)
    const[errorSubject,setErrorSubject] = useState(true)
    const[errorMessage,setErrorMessage] = useState(true)

    const nameChecker=(e)=>{
        if (!e.target.value){
            setErrorName(true)
        }
        else{
            setErrorName(false)
            setErrorNameBorderColor("")
        }
    }
    const emailChecker=(e)=>{
        if (!e.target.value){
            setErrorEmail(true)
        }
        else{
            setErrorEmail(false)
            setErrorEmailBorderColor("")
        }
    }
    const subjectChecker=(e)=>{
        if (!e.target.value){
            setErrorSubject(true)
        }
        else{
            setErrorSubject(false)
            setErrorSubjectBorderColor("")
        }
    }
    const messageChecker=(e)=>{
        if (!e.target.value){
            setErrorMessage(true)
        }
        else{
            setErrorMessage(false)
            setErrorMessageBorderColor("")
        }
    }
    const onFormSubmit = (e) =>{
        e.preventDefault()
        if(errorName === false && errorEmail === false && errorSubject === false && errorMessage === false){
            emailjs.sendForm('service_93qbw98', 'template_7cyqp27', e.target, 'ZIRJ09pJZP4dt6bws')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title:'Your Message has been sent!',
                    color:'#FFFFFF',
                    background:'#000000'
                })
            }, (error) => {
                console.log(error.text);
            });
        }
        else if(errorName === false && errorEmail === false && errorSubject === false){
            setErrorMessageBorderColor("red")
        }
        else if(errorEmail === false && errorSubject === false && errorMessage === false){
            setErrorNameBorderColor("red")
        }
        else if(errorName === false && errorSubject === false && errorMessage === false){
            setErrorEmailBorderColor("red")
        }
        else if(errorName === false && errorEmail === false && errorMessage === false){
            setErrorSubjectBorderColor("red")
        }
        else{
            setErrorNamePlaceholder("Enter Name")
            setErrorEmailPlaceholder("Enter Email")
            setErrorSubjectPlaceholder("Enter Subject")
            setErrorNameBorderColor("red")
            setErrorEmailBorderColor("red")
            setErrorSubjectBorderColor("red")
            setErrorMessageBorderColor("red")
        }
    }
    
    return (
        <section className="contact-us" id='scrollspyContacts'>
            <div className="container">
                <div className="row">
                    <div className='col-sm-6 col-md-12 col-lg-5 col-xl-6 content'>
                        <div data-aos="fade-right" className="title">
                            <h1>Keep in touch</h1>
                        </div>
                        <div className="form">
                            <form onSubmit={onFormSubmit}>
                                <p data-aos="fade-right">Name: </p>
                                <input data-aos="fade-right" type="text" name='name' onChange={nameChecker} placeholder={`${errorNamePlaceholder}`} style={{borderColor:`${errorNameBorderColor}`}}/>
                                <p data-aos="fade-right">Email Address:</p>
                                <input data-aos="fade-right" type="email" name='email' onChange={emailChecker} placeholder={`${errorEmailPlaceholder}`} style={{borderColor:`${errorEmailBorderColor}`}}/>
                                <p data-aos="fade-right">Subject:</p>
                                <input data-aos="fade-right" type="text" name='subject' onChange={subjectChecker} placeholder={`${errorSubjectPlaceholder}`} style={{borderColor:`${errorSubjectBorderColor}`}}/>
                                <p data-aos="fade-right">Message</p>
                                <textarea data-aos="fade-right" name="message" onChange={messageChecker} style={{borderColor:`${errorMessageBorderColor}`}}></textarea> <br/>
                                <button data-aos="fade-right" className="send">Send</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-sm-6 col-lg-7 col-xl-6 image'>
                        <img src={require('../images/contact-pic.png')} alt="contactPic"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs