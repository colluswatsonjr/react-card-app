import { Route, Routes } from 'react-router-dom';
import '../stylesheets/App.css';

import Navbar from './Navbar';
import Form from './Form';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      This is my card app!
      <Navbar />

      <Routes>
        <Route path='/home' />
        <Route path='/create' element={<Form />} />
        <Route path='/extras' />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
