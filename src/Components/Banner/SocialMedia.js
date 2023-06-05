import React from 'react'

export const SocialMedia = () => {
    return (
        <>
            <div class="socialShares">
                <a href="https://www.facebook.com/zunaid.rehan/" target="_blank" class="facebook"><i class="fa fa-facebook "> </i></a>
                <a href="https://www.instagram.com/zunaid_alam/" target="_blank" class="instagram"><i class="fa fa-instagram "></i></a>
                <a href="https://www.linkedin.com/in/zunaid-alam-530767128/" target="_blank" class="linkedin"><i class="fa fa-linkedin "></i></a>
            </div>
            <div className='biodata'>
                <a href="https://github.com/ZunaidRehan/portfolio/raw/master/src/images/Zunaid.pdf" download><span class="bioText"> Biodata </span></a>
                {/* <a className='resume' href="https://github.com/ZunaidRehan/portfolio/raw/master/src/images/Zunaid%20Resume.pdf" download><span class="bioText"> Resume </span></a> */}
            </div>
        </>
    )
}
