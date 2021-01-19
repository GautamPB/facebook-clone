import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import '../styles/MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum'
import HappyIcon from '@material-ui/icons/InsertEmoticon'

function MessageSender() {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        //some db stuff
        setInput('')
        setImageUrl('')
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`What's on your mind?`}
                    />

                    <input
                        value={imageUrl}
                        onChange={(e) => {
                            setImageUrl(e.target.value)
                        }}
                        placeholder="Image URL (Optional)"
                    />

                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoAlbumIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <HappyIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
