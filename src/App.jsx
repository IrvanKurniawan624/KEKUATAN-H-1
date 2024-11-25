import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';
import './App.css'
import './assets/css/style-additional.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from './components/Navbar';
//? PAGES IMPORT
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import ProductDetails from './pages/ProductDetails';
import ProductByCategory from './pages/ProductByCategory';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent = () => {
  const path = useLocation();
  const [isLogged, setIsLogged] = useState(true);
  const [username, setUsername] = useState('');
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  const cartCount = cart.length;

  useEffect(() => {
    if (localStorage.getItem('isLogged') === null) {
      localStorage.setItem('isLogged', 'false');
      localStorage.setItem('username', '');
    } else {
      setIsLogged(localStorage.getItem('isLogged') === 'true');
      setUsername(localStorage.getItem('username') || '');
    }
  }, [isLogged]);

  useEffect(() => {
    console.log(cart);
    
    localStorage.setItem("cart", JSON.stringify(cart));
    
  }, [cart]);
  
  return (
    <div className="container mx-auto lg:px-44">
      {path.pathname !== '/sign-in' && <Navbar isLogged={isLogged} username={username} cartCount={cartCount}/>}
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='/sign-in' element={<SignIn setIsLogged={setIsLogged} setUsername={setUsername} />}/>
        <Route path='/product-details/:slug' element={<ProductDetails isLogged={isLogged} cart={cart} setCart={setCart}/>}/>
        <Route path='/category/:slug' element={<ProductByCategory/>}/>
      </Routes>
    </div>
  );
}

export default App
