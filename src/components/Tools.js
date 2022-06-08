import React from 'react'

const Tools = (props) => {
    return (
        <div data-aos="fade-up" className="col-12 col-xl-4 tools">
            {props.children}
        </div>
    )
}

export default Tools