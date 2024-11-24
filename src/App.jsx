import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';
import './App.css'
import './assets/css/style-additional.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from './components/Navbar';
//? PAGES IMPORT
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import ProductDetails from './pages/ProductDetails';

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
    <div className="container mx-auto lg:px-44">
      {path.pathname !== '/sign-in' && <Navbar/>}
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/product-details/:slug' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App
