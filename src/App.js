import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
