import postStyle from "@/app/post/post.module.css";
import postData from "@/data/blogData.json";
import commentsData from '@/data/blogComments.json';
import Link from "next/link";
import {Suspense} from "react";
import Comments from "@/components/Comments";

export default function Page({ params }) {
    const id = params.id;
    const result = postData.find(x => x.id.toString() === id.toString());

    const commentsPromise = commentsData.filter(x => x.postId.toString() === id.toString());

    return (
        <div>
            <h3 className={postStyle.heading}>Details Post</h3>
            <div className={postStyle.card}>
                <div className={postStyle.container}>
                    <h4><b>{result.title}</b></h4>
                    <p>{result.content}</p>
                    <p>post date: {result.date}</p>
                </div>
            </div>
            <div className="mt-6">
                <Suspense fallback={<h3>Loading comments...</h3>}>
                    <Comments commentsPromise={commentsPromise} />
                </Suspense>
            </div>
        </div>
    )
}