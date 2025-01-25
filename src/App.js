// import logo from './logo.svg';
import './App.css';
import About from './Container/About';
import Profile from './Container/Profile';
import { useState } from 'react';

function App() {
  const [state,setState] = useState('');
  let component
  if(state === 'profile'){
    component = <Profile></Profile>
  }
  if(state === 'about'){
    component = <About></About>
  }
  return (
    <div>
      <button onClick={()=>setState('profile')}>Profile</button>
      <button onClick={()=>setState('about')}>About</button>
      {component}
    </div>
  );
}

export default App;
