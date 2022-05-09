import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

const classes = {
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
}

const EditPost = ({ editPost }) => {

    const [formData, setFormData] = React.useState({
        id:'',
        title:'',
        content:'',
        created:''
    })

    React.useEffect(()=>{
        setFormData({
            id: editPost.id,
            title: editPost.title,
            content: editPost.content,
            created: new Date().toISOString().slice(0, 10)
        })
    },[editPost])


    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        // fetch(`http://localhost:3000/data/${formData.id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // })
        //     .then(r => r.json())
        //     .then(d => {
        //         onCreate(d)
        //         // e.target.reset()
        //     })
        //     .catch(e => console.log(e))
        //     navigate('/home')
    }

    return (
        <div>
            <Typography variant="h5" color="primary" gutterbottom="true">
                Edit Note:
            </Typography>
            <form autoComplete="off">
                <TextField
                    style={classes.field}
                    variant="standard"
                    color="secondary"

                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    value={formData.title}
                    fullWidth
                    required
                />
                <TextField
                    style={classes.field}
                    variant="outlined"
                    color="secondary"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}

                    multiline
                    rows={4}
                    fullWidth
                    required
                />
            </form>
            <Button type="submit" variant="outlined" color="primary" onClick={handleSubmit}>Edit!</Button>
        </div>
    );
}

export default EditPost;