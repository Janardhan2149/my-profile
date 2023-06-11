import React from 'react';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route  path="/" element={<HomePage/>} />
          <Route  path="/about" element={<AboutPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;