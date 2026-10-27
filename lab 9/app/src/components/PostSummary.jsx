function PostSummary({ post, onView, onEdit, onDelete }) {
    return (
        <article className="post">

            <h2>{post.title}</h2>

            <p className="post-content">
                {post.content}
            </p>

            <p className="post-author">
                <strong>Author:</strong> {post.author}
            </p>

            <p className="post-date">
                Created:{" "}
                {new Date(post.createdAt).toLocaleString()}
            </p>

            <div className="post-actions">

                <button
                    className="view-btn"
                    onClick={() => onView(post._id)}
                >
                    View
                </button>

                <button
                    className="edit-btn"
                    onClick={() => onEdit(post._id)}
                >
                    Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={() => onDelete(post._id)}
                >
                    Delete
                </button>

            </div>

        </article>
    );
}

export default PostSummary;