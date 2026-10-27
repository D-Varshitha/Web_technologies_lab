import { useEffect, useState } from "react";

function Post({ postId, onBack }) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/api/posts/${postId}`
                );

                const data = await response.json();

                if (!response.ok) {
                    setError(data.message || "Failed to fetch post");
                    return;
                }

                setPost(data);

            } catch (error) {
                console.error(error);
                setError("Unable to connect to the server");
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    if (loading) {
        return <p>Loading post...</p>;
    }

    if (error) {
        return (
            <div>
                <p className="error-message">{error}</p>

                <button onClick={onBack}>
                    Back to Posts
                </button>
            </div>
        );
    }

    return (
        <div className="single-post">

            <button onClick={onBack}>
                ← Back to Posts
            </button>

            <h1>{post.title}</h1>

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

        </div>
    );
}

export default Post;