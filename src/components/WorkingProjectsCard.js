import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const WorkingProjectsCard = ({projTitle, projDesc, penDetails,percent}) => {
    return (
        <div className='col-12 projects'>
            <div className='projCard'>
                <div className='row'>
                    <div className='col-12 col-sm-4 col-md-12 col-lg-4 details d-flex align-items-center'>
                        <div>
                            <h2>{projTitle}</h2>
                            <p>{projDesc}</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 col-md-12 col-lg-4 details d-flex align-items-center'>
                        <div>
                            <h3>Working On:</h3>
                            {penDetails}
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 col-md-12 col-lg-4 prgsbar'>
                        <CircularProgressbar 
                            value={percent} 
                            text={`${percent}%`} 
                            background={true} 
                            styles={buildStyles({
                                textSize: '20px',
                                textColor: 'white',
                                trailColor: 'white',
                                backgroundColor: 'black',
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkingProjectsCard