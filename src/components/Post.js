import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/Post.css'

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topinfo">
                    <h3>{username}</h3>
                    <p>timestamp</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__iamge">
                <img src={image} />
            </div>
        </div>
    )
}

export default Post
