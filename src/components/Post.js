import { DeleteOutlined } from "@mui/icons-material";
import { Button, ButtonGroup, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import React from "react";

const Post = ({ post, onEditPost, onDeletePost }) => {

    function handleEdit(post){
        onEditPost(post)
    }

    function handleDelete(id) {
        // fetch(`http://localhost:3000/data/${id}`, {
        //     method: 'DELETE'
        // })
        onDeletePost(id)
    }
    return (
        <Card>
            <CardHeader
                action={
                    <IconButton><DeleteOutlined /></IconButton>
                }
                title={post.title}
            />
            <CardContent>
                <Typography>{post.content}</Typography>
            </CardContent>
            <ButtonGroup>
                <Button onClick={() => handleEdit(post)}>Edit!</Button>
                <Button onClick={() => handleDelete(post.id)}>Delete!</Button>
            </ButtonGroup>

        </Card>
    );
}

export default Post;