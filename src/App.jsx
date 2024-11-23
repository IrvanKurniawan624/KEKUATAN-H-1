import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import './assets/css/style-additional.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Router>
      <AppContent isLogged={isLogged} />
    </Router>
  );
}

const AppContent = () => {
  const path = useLocation();
  
  return (
    <div className="container mx-auto px-44">
      {path.pathname !== '/login' && <Navbar/>}
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App
