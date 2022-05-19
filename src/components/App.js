import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import '../stylesheets/App.css';

import Navbar from './Navbar';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import Posts from './Posts';
import About from './About';
import Footer from './Footer';
import { Box } from '@mui/system';

const classes = {
  whole: {
    marginTop: 10,
    marginBottom: 20,
    display: 'flex',
    flexDirection:'column',
    
  },
  head:{ 

  },
  page: {
    paddingTop: 75,
    height:'auto'
  },
  foot:{
    textAlign:'center',
    width:'100%',
    marginTop:'auto'
  }
}

function App() {

  const [posts, setPosts] = useState([])
  const [editPost, setEditPost] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/data`)
      .then(r => r.json())
      .then(d => setPosts(d.sort((a, b) => a.created - b.created ? 1 : -1)))
      .catch(e => console.log(e))
  }, [])

  function handleCreate(data) {
    setPosts([data, ...posts])
  }

  function handleEdit(data) {
    const newPost = posts.map((post) => {
      if (post.id === data.id) {
        return data
      } else {
        return post
      }
    })
    setPosts(newPost)
  }

  function handleDelete(id) {
    const removePost = posts.filter((post) => {
      if (post.id === id) {
        return false
      } else {
        return true
      }
    })
    setPosts(removePost)
  }


  return (

    <Box  style={classes.whole}>
      <Box style={classes.head}>
        <Navbar />
      </Box>

      <Box style={classes.page}>
        <Routes>
          <Route path='/' element={<Posts posts={posts} editThis={(data) => { setEditPost(data) }} onDelete={handleDelete} />} />
          <Route path='/create' element={<CreatePost onCreate={handleCreate} />} />
          <Route path='/edit' element={<EditPost editPost={editPost} onEdit={handleEdit} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Box>
      <Box style={classes.foot}>
        <Footer />
      </Box>

    </Box>

  );
}

export default App;
