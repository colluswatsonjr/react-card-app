import React, { useEffect, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import '../stylesheets/App.css';

import Navbar from './Navbar';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import Posts from './Posts';
import Extras from './Extras';
import Footer from './Footer';
import { Switch } from '@mui/material';
import Post from './Post';
import { Box } from '@mui/system';




function App() {
  const classes = {

  }

  const [posts, setPosts] = useState([])
  const [editPost, setEditPost] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/data`)
      .then(r => r.json())
      .then(d => setPosts(d.sort((a, b) => a.created - b.created ? 1 : -1)))
      .catch(e => console.log(e))
  }, [setPosts])

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

    <div className='whole'>
      <div className='top'>
        <Navbar />
      </div>
      {/* <div>
        <Switch>
          <Route path='/home'>
            <Posts posts={posts} editThis={(data) => { setEditPost(data) }} onDelete={handleDelete} />
          </Route>
          <Route path='/create'>
            <CreatePost onCreate={handleCreate} />
          </Route>
          <Route path='/edit'>
            <EditPost editPost={editPost} onEdit={handleEdit} />
          </Route>
          <Route path='/extras'>
            <Extras />
          </Route>
        </Switch>
      </div> */}
      <Box style={classes.page}>
        <Routes>
          <Route path='/home' element={<Posts posts={posts} editThis={(data) => { setEditPost(data) }} onDelete={handleDelete} />} />
          <Route path='/create' element={<CreatePost onCreate={handleCreate} />} />
          <Route path='/edit' element={<EditPost editPost={editPost} onEdit={handleEdit} />} />
          <Route path='/extras' element={<Extras />} />
        </Routes>
      </Box>

      <div className='bottom'>
        <Footer />
      </div>
    </div>

  );
}

export default App;
