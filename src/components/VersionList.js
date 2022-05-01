import React from 'react'


const VersionList = (props) => {
    return (
        <div className='row'>
            <div className='col-12'>
                <h2>{props.ver}</h2>
            </div>
            <div className='col-5'>
                <h3>Released Date:</h3>
            </div>
            <div className='col-7'>
                <h3><span>{props.relDate}</span></h3>
            </div>
            <div className='col-5'>
                <h3>Author:</h3>
            </div>
            <div className='col-7'>
                <h3><span>{props.author}</span></h3>
            </div>
            <div className='col-12'>
                <h3>Details:</h3>
            </div>
            <div className='col-12'>
                <h3><span>{props.details}</span></h3>
            </div>
        </div>
    )
}

export default VersionList