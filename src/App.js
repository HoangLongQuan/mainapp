import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';

function App() {  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
