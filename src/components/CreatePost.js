import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";



const CreatePost = () => {
    let navigate = useNavigate();

    const classes = {
        field: {
            marginTop: 20,
            marginBottom: 20,
            display: 'block'
        }
    }

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        content: '',
        created: new Date().toISOString().slice(0, 10)
    })

    function handleSubmit(e) {
        e.preventDefault()
        // fetch(`http://localhost:3000/data`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // })
        //     .then(r => r.json())
        //     .then(d => {
        //         onCreate(d)
        //         navigate('/home')
        //     })
        //     .catch(e => console.log(e))
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