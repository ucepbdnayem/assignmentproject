import commentStyle from './navber.module.css';
export default async function Comments({ commentsPromise }) {
    const comments = await commentsPromise;

    return (
        <div className={commentStyle.comeemtBody}>
            <h2 className={commentStyle.fontBold}>comments</h2>
            {comments.map((comment) => (
                <div className={commentStyle.mediaBlock} key={comment.id}>
                    <div className={commentStyle.mediaBody}>
                        <div className={commentStyle.marBtm}>
                            <p>{comment.name}</p>
                            <p className={commentStyle.textMuted}> - Email - {comment.email}</p>
                        </div>
                        <p>{comment.body}</p>
                        <hr/>
                    </div>
                </div>
            ))}
        </div>
    );
}