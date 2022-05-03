const Form = () => {
    return (
        <form action="/action_page.php" method="get">
            <br/><br/>
            <label htmlFor="title">Title:</label>
            <br/>
            <input type="text" className="title" name="title" />
            <br/><br/>
            <label htmlFor="content">Last name:</label>
            <br/>
            <textarea className="content" name="content" />
            <br/><br/>
            <button>Submit!</button>
        </form>
    );
}

export default Form;