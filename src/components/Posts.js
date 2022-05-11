import { Container, Grid } from "@mui/material";

import Post from "./Post";

const Posts = ({ posts, editThis, onDelete }) => {

    const createPosts = posts.map((post) => (
        <Grid item key={post.id} xs={12} sm={6} lg={3}>
            <Post post={post} editThis={editThis} onDelete={onDelete} />
        </Grid>
    ))


    return (
        <Container>
            <Grid container spacing={3}>
                {createPosts}
            </Grid>
        </Container>
    );
}

export default Posts;