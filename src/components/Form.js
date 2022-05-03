import React, { useEffect, useState } from "react";

const Form = ({ onCreate, editCard }) => {

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

        fetch(`http://localhost:3000/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(d => onCreate(d))
            .catch(e => console.log(e))

        e.target.reset()
    }


    return (
        <form className="Form" onSubmit={(e) => handleSubmit(e)}>
            <label>Title:</label>
            <br />
            <input type="text" className="title" name="title" onChange={(e) => handleChange(e)} value={formData.title} />
            <br /><br />
            <label>Content:</label>
            <br />
            <textarea className="content" name="content" onChange={(e) => handleChange(e)} value={formData.content} />
            <br /><br />
            <button type="submit">Submit!</button>
        </form>
    );
}

export default Form;