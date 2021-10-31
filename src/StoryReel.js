import React from 'react'
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://i.ibb.co/fkFzrXW/nsr-game-thumbnail.webp"
                profileSrc = "https://i.ibb.co/yqDCdGg/New-Hijabi-Girls-DP-for-social-Media-Profile-2021-30-1.webp"
                title="Fatima"
            />

            <Story 
                image="https://i.ibb.co/TqWXLg8/imf-f-hyuga-hinata.jpg"
                profileSrc = "https://i.ibb.co/nM0gpFp/a-KIB-IN-TSHIRT.jpg"
                title="CoderAkib"
            />

            <Story 
                image="https://i.ibb.co/gm3rN58/dcgwins-705d21b2-0c86-44d4-ba14-1fa33390fe19.jpg"
                profileSrc = "https://i.ibb.co/TqWXLg8/imf-f-hyuga-hinata.jpg"
                title="Hinata-Chan"
            />

            <Story 
                image="https://i.ibb.co/GkHq4Vt/5ecf586be9f82b400471bff0-large.jpg"
                profileSrc = "https://i.ibb.co/r53zfnJ/nezuko-43.jpg"
                title="Nezuko-Chan"
            />
            
        </div>
    )
}

export default StoryReel
