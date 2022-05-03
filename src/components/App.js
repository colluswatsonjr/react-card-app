import { Route, Routes } from 'react-router-dom';
import '../stylesheets/App.css';

import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      This is my card app!
      <Navbar />
      <Routes>
        <Route path='/home'></Route>
        <Route path='/create'></Route>
        <Route path='/extras'></Route>
      </Routes>
    </div>
  );
}

export default App;
