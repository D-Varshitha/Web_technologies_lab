import { useEffect, useState } from "react";

function Edit({ postId, onUpdated, onCancel }) {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Load the existing post
    useEffect(() => {

        const fetchPost = async () => {

            try {

                const response = await fetch(
                    `http://localhost:3000/api/posts/${postId}`
                );

                const data = await response.json();

                if (!response.ok) {
                    setError(data.message || "Failed to load post");
                    return;
                }

                setTitle(data.title);
                setAuthor(data.author);
                setContent(data.content);

            } catch (error) {

                console.error(error);
                setError("Unable to connect to the server");

            } finally {

                setLoading(false);

            }
        };

        fetchPost();

    }, [postId]);


    // Update the post
    const handleSubmit = async (event) => {

        event.preventDefault();

        setError("");

        try {

            const response = await fetch(
                `http://localhost:3000/api/posts/${postId}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        title,
                        author,
                        content
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Failed to update post");
                return;
            }

            onUpdated();

        } catch (error) {

            console.error(error);
            setError("Unable to connect to the server");

        }
    };


    if (loading) {
        return <p>Loading post...</p>;
    }


    return (
        <div className="create-page">

            <h1>Edit Post</h1>

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label>Title</label>

                    <input
                        type="text"
                        value={title}
                        onChange={(event) =>
                            setTitle(event.target.value)
                        }
                    />

                </div>


                <div className="form-group">

                    <label>Author</label>

                    <input
                        type="text"
                        value={author}
                        onChange={(event) =>
                            setAuthor(event.target.value)
                        }
                    />

                </div>


                <div className="form-group">

                    <label>Content</label>

                    <textarea
                        rows="8"
                        value={content}
                        onChange={(event) =>
                            setContent(event.target.value)
                        }
                    />

                </div>


                <button
                    type="submit"
                    className="primary-btn"
                >
                    Update Post
                </button>


                <button
                    type="button"
                    className="secondary-btn"
                    onClick={onCancel}
                >
                    Cancel
                </button>

            </form>

        </div>
    );
}

export default Edit;