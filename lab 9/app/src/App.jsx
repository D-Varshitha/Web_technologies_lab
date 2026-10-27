import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Post from "./pages/Post";
import Edit from "./pages/Edit";

function App() {

    const [page, setPage] = useState("home");

    const [selectedPostId, setSelectedPostId] = useState(null);


    const handleViewPost = (id) => {

        setSelectedPostId(id);
        setPage("post");

    };


    const handleEditPost = (id) => {

        setSelectedPostId(id);
        setPage("edit");

    };


    const handleDeletePost = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this post?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const response = await fetch(
                `http://localhost:3000/api/posts/${id}`,
                {
                    method: "DELETE"
                }
            );

            const data = await response.json();

            if (!response.ok) {

                alert(
                    data.message || "Failed to delete post"
                );

                return;
            }

            alert("Post deleted successfully");

            window.location.reload();

        } catch (error) {

            console.error(error);

            alert("Unable to connect to the server");

        }
    };


    return (
        <div className="app">

            {page === "home" && (
                <>
                    <div className="app-header">

                        <h1>My Blog</h1>

                        <button
                            className="primary-btn"
                            onClick={() => setPage("create")}
                        >
                            + Create New Post
                        </button>

                    </div>

                    <Home
                        onView={handleViewPost}
                        onEdit={handleEditPost}
                        onDelete={handleDeletePost}
                    />
                </>
            )}


            {page === "create" && (
                <Create
                    onPostCreated={() => setPage("home")}
                    onCancel={() => setPage("home")}
                />
            )}


            {page === "post" && (
                <Post
                    postId={selectedPostId}
                    onBack={() => setPage("home")}
                />
            )}


            {page === "edit" && (
                <Edit
                    postId={selectedPostId}
                    onUpdated={() => setPage("home")}
                    onCancel={() => setPage("home")}
                />
            )}

        </div>
    );
}

export default App;