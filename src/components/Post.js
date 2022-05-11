import { DeleteOutlined } from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit';
import { ButtonGroup, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ post, editThis, onDelete }) => { 
    let navigate = useNavigate()

    function deleteThis(id){
        fetch(`http://localhost:3000/data/${id}`, {
            method: 'DELETE'
          })
          onDelete(id)
    }
 
    return (
        <Card>
            <CardHeader
                action={
                    <ButtonGroup>
                        <IconButton onClick={() => {
                            editThis(post)
                            navigate('/edit')
                            }}><EditIcon /></IconButton>
                        <IconButton onClick={() => deleteThis(post.id)}><DeleteOutlined /></IconButton>
                    </ButtonGroup>
                }
                title={post.title}
                style={{wordBreak:'break-word'}}
            />
            <CardContent>
                <Typography style={{wordBreak:'break-word'}}>{post.content}</Typography>
            </CardContent>

        </Card>
    );
}

export default Post;