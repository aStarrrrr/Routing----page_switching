import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import About from './Container/About';
import Profile from './Container/Profile';

function App() {
  const navigate = useNavigate(); // Correct navigation in v6

  return (
    <div>
      <button onClick={() => navigate('/profile')}>Profile</button>
      <button onClick={() => navigate('/about')}>About</button>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

// Wrap the app inside BrowserRouter in index.js or here
export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
