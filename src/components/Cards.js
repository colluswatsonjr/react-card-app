import OneCard from "./OneCard";

const Cards = ({ cards, onEdit, onDelete }) => {

    const createCards = cards.map((card) => <OneCard key={card.id} card={card} onEdit={onEdit} onDelete={onDelete} />)

    return (
        <div className="Cards">
            {createCards}
        </div>
    );
}

export default Cards;