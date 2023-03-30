import React from 'react'
import { SocialMedia } from './SocialMedia'

export const Name = () => {
    return (
        <div className='details'>
            <div className='name'>Hi, I'm <span>Zunaid Alam</span><div className='dot'></div></div>
            <div className='discription word'>
                <span>Mr. </span>
                <span>Perfectionist</span>
            </div>
            <div className='moreDesc'>
                <span className='developer'>Developer</span> by profession,
                <span className='lovable'> Lovable and Kind</span> as a person
            </div>
            <SocialMedia />
        </div>
    )
}
