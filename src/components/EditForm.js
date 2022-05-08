import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditForm = ({ onCreate, editCard }) => {
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        content: '',
        created: new Date().toISOString().slice(0, 10)
    })

    useEffect(() => {
        setFormData(editCard)
    }, [editCard])


    function handleChange(e) {
        let key = e.target.name
        const newData = {
            ...formData,
            [key]: e.target.value
        }
        setFormData(newData)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/data/${formData.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(d => {
                onCreate(d)
                // e.target.reset()
            })
            .catch(e => console.log(e))
            navigate('/home')


    }

    return (
        <form className="Form" onSubmit={(e) => handleSubmit(e)}>
            <label>Title:</label>
            <br />
            <input type="text" maxLength='25' className="title" name="title" onChange={(e) => handleChange(e)} value={formData.title} />
            <br /><br />
            <label>Content:</label>
            <br />
            <textarea className="content" maxLength='260' rows={5} cols={50} name="content" onChange={(e) => handleChange(e)} value={formData.content} />
            <br /><br />
            <button type="submit">Edit!</button>
        </form>
    );
}

export default EditForm;