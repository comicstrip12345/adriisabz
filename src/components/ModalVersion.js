import React, { Fragment } from 'react'
import VersionList from './VersionList'

const ModalVersion = (props) => {
    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1>Versions</h1>
                        <button type="button" className="" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg"></i></button>
                    </div>
                    <div className="modal-body">
                        <VersionList
                            ver="v.2.2.3.1"
                            relDate="September 3, 2022"
                            author="Adriano Sabanal Jr."
                            details='Added 2 Pending Projects in Pending Projects Modal.'
                        />
                        <VersionList
                            ver="v.2.2.3"
                            relDate="August 25, 2022"
                            author="Adriano Sabanal Jr."
                            details={<Fragment>
                                <strong>1. </strong>Added Working Projects Modal beside "Websites" Title.<br/>
                                <strong>2. </strong>Added Simple Loading Screen.<br/>
                                <strong>3. </strong>Added Another Work Experience.<br/>
                                <strong>4. </strong>Change position title from Hero Section.<br/>
                                <strong>5. </strong>Added Skills "Redux" and "NextJS".<br/>
                                <strong>6. </strong>Changed year from "2022" to "2020" in Work Experience Section.<br/>
                                <strong>7. </strong>Added Education in Navbar, and changed "Coding Experience" section title to "Education".<br/>
                            </Fragment>}
                        />
                        <VersionList
                            ver="v.2.2.2"
                            relDate="June 11, 2022"
                            author="Adriano Sabanal Jr."
                            details={<Fragment>
                                <strong>1. </strong>Added Work Experience Section<br/>
                                <strong>2. </strong>Change "Experiences" to "Experience" on Navbar.<br/>
                            </Fragment>}
                        />
                        <VersionList
                            ver="v.2.2.1"
                            relDate="June 11, 2022"
                            author="Adriano Sabanal Jr."
                            details="Updated Resume Form"
                        />
                        <VersionList
                            ver="v.2.2.0"
                            relDate="June 8, 2022"
                            author="Adriano Sabanal Jr."
                            details={<Fragment>
                                <strong>1. </strong>Transformed into Single Page Application<br/>
                                <strong>2. </strong>Updated Resume Form<br/>
                                <strong>3. </strong>Scrollable Personal Information. Available only on desktop view.<br/>
                                <strong>4. </strong>Added Animations on scroll.<br/>
                                <strong>5. </strong>Added Scroll to top button.<br/>
                                <strong>6. </strong>Added Scrollspy for each section.<br/>
                                <strong>7. </strong>Added 2 websites.<br/>
                                <strong>8. </strong>Contact Form is fully functional with form validation. You can reach me via contact form.<br/>
                                <strong>9. </strong>This website can be viewed on any mobile devices.
                            </Fragment>}
                        />
                        <VersionList
                            ver="v.2.1.2"
                            relDate="May 19, 2022"
                            author="Adriano Sabanal Jr."
                            details={<Fragment>
                                <strong>1. </strong>Added Profile Links<br/>
                                <strong>2. </strong>Updated Resume Form<br/>
                                <strong>3. </strong>Updated "watchr" website description<br/>
                                <strong>4. </strong>Removed Discord from Contacts
                            </Fragment>}
                        />
                        <VersionList
                            ver="v.2.1.1"
                            relDate="May 11, 2022"
                            author="Adriano Sabanal Jr."
                            details="Solved error downloading resume and certificates by link to Google Drive."
                        />
                        <VersionList
                            ver="v.2.1.0"
                            relDate="May 11, 2022"
                            author="Adriano Sabanal Jr."
                            details={<Fragment>
                                <strong>1. </strong>SASS Code Optimization<br/>
                                <strong>2. </strong>Added Form Validation <br/>
                                <strong>3. </strong>Added 2 Website Projects and its Github Links <br/>
                                <strong>4. </strong>Added hover animation to all buttons and hyperlinks <br/>
                                <strong>5. </strong>Changed Grammar to all website description
                            </Fragment>}
                        />
                        <VersionList
                            ver="v.2.0.2"
                            relDate="May 1, 2022"
                            author="Adriano Sabanal Jr."
                            details="Added Version List Modal located in footer section."
                        />
                        <VersionList
                            ver="v.2.0.1"
                            relDate="May 1, 2022"
                            author="Adriano Sabanal Jr."
                            details="Modified Professional Skill in mobile and tablet screens from 'Front-end Web Developer Web Designer' to 'Front-end Web Developer and Web Designer'."
                        />
                        <VersionList
                            ver="v.2.0.0"
                            relDate="April 29, 2022"
                            author="Adriano Sabanal Jr."
                            details="First website to release with functionalites and responsiveness."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalVersion