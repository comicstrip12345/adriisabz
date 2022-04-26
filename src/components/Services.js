import React from 'react'
import ServiceLayout from './ServiceLayout'
import '../css/services.css'

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-12 title">
                        <h1>What I do?</h1>
                    </div>
                    <ServiceLayout
                        img= {require('../images/services/web-design.png')}
                        h1l1= "Web"
                        h1l2= "Design"
                        p= "Designing a webpage according to client’s specifications."
                    />
                    <ServiceLayout
                        img= {require('../images/services/coding.png')}
                        h1l1= "Web"
                        h1l2= "Development"
                        p= "Incorporate the design of webpage to HTML file."
                    />
                    <ServiceLayout
                        img= {require('../images/services/web-development.png')}
                        h1l1= "Personal"
                        h1l2= "Development"
                        p= "Increasing knowledge everytime I code."
                    />
                </div>
            </div>
        </section>
    )
}

export default Services