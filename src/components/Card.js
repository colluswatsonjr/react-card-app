const Card = ({ card, onEdit, onDelete }) => {
    console.log(card)

    function deleteCard() {
        fetch(`http://localhost:3000/data/${card.id}`, {
            method: 'DELETE'
        })
        onDelete(card.id)
    }
    function editCard(){
        onEdit(card)
    }

    return (
        <div className="card">
            card
            <div className="card_content">
                <div className="title">
                    {card.title}
                </div>
                <div className="card_content">
                    {card.content}
                </div>
                <div className="card_created">
                    {card.created}
                </div>
            </div>
            <div className="card_btns">
                <button onClick={editCard} className="editBtn">Edit</button>
                <button onClick={deleteCard} className="deleteBtn">Delete</button>
            </div>
        </div>
    );
}

export default Card;