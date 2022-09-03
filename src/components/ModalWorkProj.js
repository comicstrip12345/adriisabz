import React, { Fragment } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import WorkingProjectsCard from './WorkingProjectsCard';

const ModalWorkProj = ({id,img,link}) => {
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1>Pending Projects</h1>
                        <button type="button" className="" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg"></i></button>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <WorkingProjectsCard
                                projTitle='driiBus'
                                projDesc='driiBus is an online Booking App made in ReactJS and Redux.'
                                penDetails={<Fragment>
                                    <p>- building a chatbot</p>
                                    <p>- transform into responsive website</p>
                                </Fragment>}
                                percent={70}
                            />
                            <WorkingProjectsCard
                                projTitle='bookStore'
                                projDesc='bookStore is an online Book Store App made in ReactJS and Redux.'
                                penDetails={<Fragment>
                                    <p>- building a payment option</p>
                                    <p>- transform into responsive website</p>
                                </Fragment>}
                                percent={60}
                            />
                            <WorkingProjectsCard
                                projTitle='driiPark'
                                projDesc='driiPark is an online Parking App made in ReactJS, Redux, and TypeScript.'
                                penDetails={<Fragment>
                                    <p>- designing an application</p>
                                    <p>- build and test functionalities</p>
                                </Fragment>}
                                percent={10}
                            />
                            <WorkingProjectsCard
                                projTitle='driiMarket'
                                projDesc='driiMarket is an app for market owners who wants to manage their products and respective prices, and to help cashiers for payment process and produce receipts. This app will be made by ReactJS, NextJS, TypeScript, Redux, Express JS, and mySQL.'
                                penDetails={<Fragment>
                                    <p>- designing an application</p>
                                </Fragment>}
                                percent={5}
                            />
                            <WorkingProjectsCard
                                projTitle='driiFood'
                                projDesc='driiFood is an app for restaurant owners who wantS to manage their consumable products and their prices, and to help cashiers for payment process and produce receipts. This app will be made by ReactJS, NextJS, TypeScript, Redux, Express JS, and mySQL.'
                                penDetails={<Fragment>
                                    <p>- designing an application</p>
                                </Fragment>}
                                percent={5}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalWorkProj