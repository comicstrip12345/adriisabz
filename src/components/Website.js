import React from 'react'
import WebsiteDesktopVersion from './WebsiteDesktopVersion'
import WebsiteMobileVersion from './WebsiteMobileVersion'
import WebsiteTabVersion from './WebsiteTabVersion'

const Website = () => {
    return (
        <section className="websites" data-bs-spy="scroll" data-bs-target="#scrollSpy" id='buttonWebsite'>
            <div className="container">
                <div className="row">
                    <div data-aos="fade-right" className="col-12 title">
                        <h1>Websites</h1>
                    </div>
                    <div data-aos="fade-up" className='overflow'>
                        <div className='row'>
                            <WebsiteDesktopVersion/>
                            <WebsiteMobileVersion/>
                            <WebsiteTabVersion/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Website