import React, { useEffect, useState } from 'react'
import '../styles/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../firebase'

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                <Post
                    key={post.data.id}
                    username={post.data.username}
                    profilePic={post.data.profilePic}
                    timestamp={post.data.timestamp}
                    image={post.data.image}
                    message={post.data.message}
                />
            ))}
        </div>
    )
}

export default Feed
