import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

const classes = {
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
}

const EditPost = ({ editPost, onEdit }) => {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        content: '',
        created: ''
    })

    useEffect(() => {
        setFormData(editPost)
    }, [editPost])


    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch(`http://localhost:3000/data/${formData.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(d => {
                onEdit(d)
                navigate('/home')
            })
            .catch(e => console.log(e))
    }


    return (
        <div className={classes.page}>
            <Typography variant="h5" color="primary" gutterbottom="true">
                Edit Note:
            </Typography>
            <form autoComplete="off">
                <TextField
                    style={classes.field}
                    variant="standard"
                    color="secondary"

                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}

                    inputProps={{maxLength :15}}
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