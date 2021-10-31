import React, { useEffect, useState } from 'react'
import "./Feed.css";
import MesssageSender from './MesssageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from "./firebase";

function Feed() 
{
    const [posts, setPosts] = useState([]);

    useEffect(() => 
    {
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) =>({ id: doc.id,
            data: doc.data() })))
        );

    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MesssageSender />

            {posts.map(post => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}     
        </div>
    );
}

export default Feed

