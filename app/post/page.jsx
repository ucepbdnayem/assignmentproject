import React from 'react';
import postStyle from './post.module.css';
import postData from '../../data/blogData.json';
import Link from "next/link";
function Post(props) {
    return (
        <div>
            <h3 className={postStyle.heading}>All Post list</h3>
            {postData.map(item => (
                <div className={postStyle.card} key={item.id}>
                    <div className={postStyle.container}>
                        <h4><Link href={`/post/${item.id}`}><b>{item.title}</b></Link></h4>
                        <p>post date: {item.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Post;