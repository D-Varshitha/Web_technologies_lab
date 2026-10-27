import { useState } from "react";

function Create({ onPostCreated, onCancel }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setMessage("");
        setError("");

        try {
            const response = await fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    author,
                    content
                })
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Failed to create post");
                return;
            }

            setMessage("Post created successfully!");

            setTitle("");
            setAuthor("");
            setContent("");

            if (onPostCreated) {
                onPostCreated(data.post);
            }

        } catch (error) {
            console.error(error);
            setError("Unable to connect to the server");
        }
    };

    return (
        <div className="create-page">

            <h1>Create New Post</h1>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Title</label>

                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Enter post title"
                    />
                </div>

                <div className="form-group">
                    <label>Author</label>

                    <input
                        type="text"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                        placeholder="Enter author name"
                    />
                </div>

                <div className="form-group">
                    <label>Content</label>

                    <textarea
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                        placeholder="Write your post..."
                        rows="8"
                    />
                </div>

                <button type="submit">
                    Create Post
                </button>

                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>

            </form>

            {message && (
                <p className="success-message">
                    {message}
                </p>
            )}

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}

        </div>
    );
}

export default Create;