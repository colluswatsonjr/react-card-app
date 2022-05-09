import { Container, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";

import Post from "./Post";

const Posts = ({onEdit}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/data`)
            .then(r => r.json())
            .then(d => setPosts(d.sort((a, b) => a.created - b.created ? 1 : -1)))
            .catch(e => console.log(e))
    }, [setPosts])

    function handleEditPost(data){
        onEdit(data)
    }

    function handleDeletePost(id){
        const removePost = posts.filter((post)=>{
            if(post.id===id){
                return false
            }else{
                return true
            }
        })

        setPosts(removePost)
    }

    return (
        <Container>
            <Grid container spacing={4}>
                {posts.map((post) => (
                    <Grid item key={post.id} xs={12} sm={6} lg={3}>
                        <Post post={post} onEditPost={handleEditPost} onDeletePost={handleDeletePost}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Posts;