import { DeleteOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import React from "react";

const Post = ({ post }) => {
    return (
        <Card>
            <CardHeader 
            action={
                <IconButton><DeleteOutlined/></IconButton>
            }
            title={post.title}
            />
            <CardContent>
                <Typography>{post.content}</Typography>
            </CardContent>

        </Card>
    );
}

export default Post;