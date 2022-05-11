import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

    const classes = {
        field: {
            marginTop: 10,
            marginBottom: 20,
            display: 'block'
        }
    }


const CreatePost = ({onCreate}) => {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        title:'',
        content:'',
        created: new Date().toISOString().slice(0, 10)
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => {
                onCreate(data)
                navigate('/home')
            })
            .catch(e => console.log(e))
    }

    return (
        <div>
            <Typography variant="h5" color="primary" gutterbottom="true">
                Create Note:
            </Typography>
            <form autoComplete="off">
                <TextField
                    style={classes.field}
                    label="Note Title"
                    variant="standard"
                    color="secondary"

                    onChange={(e)=>setFormData({...formData, title:e.target.value})}

                    fullWidth
                    required
                />
                <TextField
                    style={classes.field}
                    label="Note Content"
                    variant="outlined"
                    color="secondary"

                    onChange={(e)=>setFormData({...formData, content:e.target.value})}

                    multiline
                    rows={4}
                    fullWidth
                    required
                />
            </form>
            <Button type="submit" variant="outlined" color="primary" onClick={handleSubmit}>Submit!</Button>
        </div>
    );
}
 
export default CreatePost;