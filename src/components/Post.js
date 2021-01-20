import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUpAltOutlined'
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import ShareIcon from '@material-ui/icons/ForwardOutlined'

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

            <div className="post__image">
                <img src={image} />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <h3>Like</h3>
                </div>

                <div className="post__option">
                    <CommentIcon />
                    <h3>Comment</h3>
                </div>

                <div className="post__option">
                    <ShareIcon />
                    <h3>Share</h3>
                </div>
            </div>
        </div>
    )
}

export default Post
