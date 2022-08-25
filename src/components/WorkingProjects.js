import React from 'react'
import WorkingProjectsCard from './WorkingProjectsCard'

const WorkingProjects = () => {
    return (
        <section className='wrkngproj'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 title'>
                        <h1>Working Projects</h1>
                    </div>
                    <WorkingProjectsCard
                        projTitle='driiBus'
                        projDesc='driiBus is an online Booking App made in ReactJS and Redux.'
                    />
                    <WorkingProjectsCard
                        projTitle='bookStore'
                        projDesc='bookStore is an E-Commerce App made in ReactJS and Redux.'
                    />
                    <WorkingProjectsCard
                        projTitle='driiPark'
                        projDesc='driiPark is an online Booking App made in ReactJS and Redux.'
                    />
                </div>
            </div>
        </section>
    )
}

export default WorkingProjects