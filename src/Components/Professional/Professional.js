import React from 'react'
import './professional.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Professional = () => {
    return (
        <div className='container'>
            <div className='contentWrap'>
                <h2 className='header lovable'>Professional</h2>
                <div className='dFlex'>
                    <div className='paragraph'>
                        <h4>Sr. Software Developer</h4>
                        <p><i className="fa fa-check"></i> Working as a Sr. software developer and having 4+ years of
                            Experience.</p>
                        <div><p><i className="fa fa-check"></i> Currently Working with Appventurez Mobitech since 2 years.</p></div>
                    </div>
                    <div className='paragraph'>
                        <h4> Software Developer</h4>
                        <p><i className="fa fa-check"></i> Worked with KMSG Technologies based in Noida  About 2 years
                            as a React Js Developer.</p>
                    </div>
                </div>
                <div className='skills'>
                    <h3>Skills Set</h3>
                    <div className='dFlex'>
                        <div className='paragraph'>
                            <CircularProgressbar value={90} text={`${90}%`}
                                styles={buildStyles({
                                    textColor: "red",
                                    pathColor: "turquoise",
                                    trailColor: "gold"
                                })}
                            />
                            <div className='tag'>HTML</div>
                        </div>
                        <div className='paragraph'>
                            <CircularProgressbar value={95} text={`${95}%`}
                                styles={buildStyles({
                                    textColor: "blue",
                                    pathColor: "red",
                                    trailColor: "lightGray"
                                })}
                            />
                            <div className='tag'>CSS</div>
                        </div>
                        <div className='paragraph'>
                            <CircularProgressbar value={80} text={`${80}%`}
                                styles={buildStyles({
                                    textColor: "purple",
                                    pathColor: "green",
                                    trailColor: "lightBlue"
                                })}
                            />
                            <div className='tag'>JavaScript</div>
                        </div>
                        <div className='paragraph'>
                            <CircularProgressbar value={85} text={`${85}%`}
                                styles={buildStyles({
                                    textColor: "green",
                                    pathColor: "gold",
                                    trailColor: "turquoise"
                                })}
                            />
                            <div className='tag'>React Js</div>
                        </div>
                        <div className='paragraph'>
                            <CircularProgressbar value={95} text={`${95}%`}
                                styles={buildStyles({
                                    textColor: "black",
                                    pathColor: "purple",
                                    trailColor: "green"
                                })}
                            />
                            <div className='tag'>Redux</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
