import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import '../stylesheets/App.css';

import Navbar from './Navbar';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import Posts from './Posts';
import Extras from './Extras';
import Footer from './Footer';

function App() {
  const [editPost, setEditPost] = useState({})


  let loading = false;
  // const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([])
  const [editCard, setEditCard] = useState({
    id: '',
    title: '',
    content: '',
    created: ('Edited' + new Date().toISOString().slice(0, 10))
  })

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 100)
  // }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/data`)
      .then(r => r.json())
      .then(d => setCards(d.sort((a, b) => a.created - b.created ? 1 : -1)))
      .catch(e => console.log(e))
  }, [setCards])

  function handleNewCard(data) {
    setCards([data, ...cards])
  }
  function handleNewEdit(data) {
    const newCards = cards.map((card) => {
      if (card.id === data.id) {
        return data
      } else {
        return card
      }
    })
    setCards(newCards)
  }
  function handleEdit(data) {
    setEditPost(data)
  }


  return (
    <React.Fragment>
      {loading ? <h1>Loading...</h1> :
        <div className="App">
          <Navbar />
          <CreatePost />
          <EditPost editPost={editPost} />
          <Posts onEdit={handleEdit}/>
          {/* <Extras /> */}
          <Footer />
        </div>
      }
    </React.Fragment>
  );
}

export default App;
