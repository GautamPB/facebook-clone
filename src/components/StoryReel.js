import React from 'react'
import '../styles/StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="data:image/jpeg;base64,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"
                profileSrc="https://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg"
                title="Gautam B"
            />

            <Story
                image="https://wallpapercave.com/wp/wp5769363.jpg"
                title="Nischal K"
                profileSrc="https://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg"
            />

            <Story
                image="https://i.pinimg.com/originals/03/c6/1a/03c61adb9c6acf289a9b4a06c18cbe36.jpg"
                title="Rohit S"
                profileSrc="https://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg"
            />

            <Story
                image="https://i.pinimg.com/originals/8f/4a/96/8f4a96f48aec0add555d22b39c3d2c52.jpg"
                title="Kevin V"
                profileSrc="https://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg"
            />

            <Story
                image="https://i.pinimg.com/originals/01/cf/3a/01cf3ac04490e0b8139cd80221ade81e.jpg"
                title="Ronith U"
                profileSrc="https://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg"
            />
        </div>
    )
}

export default StoryReel
