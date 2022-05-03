import Card from "./Card";

const Cards = ({ cards, onEdit, onDelete }) => {

    const createCards = cards.map((card) => <Card key={card.id} card={card} onEdit={onEdit} onDelete={onDelete} />)

    return (
        <div className="Cards">
            Cards
            {createCards}
        </div>
    );
}

export default Cards;