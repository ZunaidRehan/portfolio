import React from 'react';
import ProfileList from './ProfileList';
import './photoGallery.scss'

export const PhotoGallery = () => {
    return (
        <div className='container'>
            <div className='contentWrap'>
                <h2 className='header lovable'>Photo Gallery</h2>
                <div className='photoGallery'>
                    {ProfileList.map((item) => {
                        return (
                            <div key={item.id} className='dFlex imageWrapper'>
                                <img src={item.img} alt="zunaid alam" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
