import { Container, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";

import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/data`)
            .then(r => r.json())
            .then(d => setPosts(d.sort((a, b) => a.created - b.created ? 1 : -1)))
            .catch(e => console.log(e))
    }, [setPosts])

    return (
        <Container>
            <Grid container spacing={4}>
                {posts.map((post) => (
                    <Grid item xs={12} sm={6} lg={3}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Posts;