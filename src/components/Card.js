import { useNavigate } from "react-router-dom";

const Card = ({ card, onEdit, onDelete }) => {
    let navigate = useNavigate();


    function deleteCard() {
        fetch(`http://localhost:3000/data/${card.id}`, {
            method: 'DELETE'
        })
        onDelete(card.id)
    }
    function editCard() {
        onEdit(card)
        navigate(`/create`)
    }

    return (
        <div className="card">
            <div>
                <div className="card_title">
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