import {useState,useEffect} from "react";
import PostSummary from "../components/PostSummary";

function Home({ onView, onEdit, onDelete }){
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{
        fetchPosts();
    },[]);

    async function fetchPosts(){
        try{
            const response = await fetch(
                "http://localhost:3000/api/posts"
            );

            if(!response.ok){
                throw new Error("Failed to fetch posts");
            }
            const data = await response.json();

            setPosts(data);
        }
        catch(e){
            console.error(e.message);
            setError("Unable to load the posts");
        }
        finally{
            setLoading(false);
        }
    }
    if(loading){
        return <h2>Loading posts...</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }

   return (
    <div>
        <h1>Blog Posts</h1>

        {posts.length === 0 ? (
            <p>No posts available.</p>
        ) : (
            <div className="posts">
                {posts.map((post) => (
                    <PostSummary
    key={post._id}
    post={post}
    onView={onView}
    onEdit={onEdit}
    onDelete={onDelete}
/>
                ))}
            </div>
        )}
    </div>
);
}
export default Home;