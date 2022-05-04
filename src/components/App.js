import { Route, Routes } from 'react-router-dom';
import '../stylesheets/App.css';

import Navbar from './Navbar';
import Cards from './Cards';
import Form from './Form';
import Extras from './Extras';
import Footer from './Footer';
import { useEffect, useState } from 'react';

function App() {

  const [cards, setCards] = useState([])
  const [editCard, setEditCard] = useState({})

  useEffect(()=>{
    fetch(`http://localhost:3000/data`)
    .then(r=>r.json())
    .then(d=>setCards(d.sort((a, b) => a.created - b.created?1:-1)))
    .catch(e=>console.log(e))
  },[])

  function handleCreate(data){
    const newCards = [data,...cards]

    setCards(newCards)
  }

  function handleEdit(data){
    setEditCard(data)
  }

  function handleDelete(id){
    const removeCard = cards.filter((card)=>{
      if(card.id === id){
        return false
      }else{
        return true
      }
    })
    setCards(removeCard)
  }


  return (
    <div className="App">
      This is my card app!
      <Navbar />

      <Routes>
        <Route path='/home' element={<Cards cards={cards} onEdit={handleEdit} onDelete={handleDelete}/>}/>
        <Route path='/create' element={<Form onCreate={handleCreate} editCard={editCard}/>} />
        <Route path='/extras' element={<Extras/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
