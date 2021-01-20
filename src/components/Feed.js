import React from 'react'
import '../styles/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https://st2.depositphotos.com/2101611/8308/v/600/depositphotos_83084390-stock-illustration-businessman-icon-can-be-used.jpg"
                message="Wow this works"
                timestamp="This is a timestamp"
                username="Gautam B"
                image="https://www.jonesday.com/-/media/files/publications/2019/05/when-coding-is-criminal/when-coding-is-criminal.jpg"
            />

            <Post
                profilePic="https://st2.depositphotos.com/2101611/8308/v/600/depositphotos_83084390-stock-illustration-businessman-icon-can-be-used.jpg"
                message="Wow this works"
                timestamp="This is a timestamp"
                username="Gautam B"
            />

            <Post
                profilePic="https://st2.depositphotos.com/2101611/8308/v/600/depositphotos_83084390-stock-illustration-businessman-icon-can-be-used.jpg"
                message="Wow this works"
                timestamp="This is a timestamp"
                username="Gautam B"
                image="https://www.jonesday.com/-/media/files/publications/2019/05/when-coding-is-criminal/when-coding-is-criminal.jpg"
            />
        </div>
    )
}

export default Feed
