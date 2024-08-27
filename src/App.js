import './App.css';
import Navbar from "./components/Navbar";
// import Carousel from "./components/Carousel/Carousel"
import Products from "./product-page/display";
// import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Home from "./pages/Home";
// import Logo from "./assets/logo.png"
import Footer from "./components/Footer";
import Cart from './pages/cart-function/Cart/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Display from "./product-page/display";

import Shop from "./pages/cart-function/Products/Shop";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return ( 
    <div className="app">
      <ShopContextProvider>
        <Router>
          <Navbar />        
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/home" exact element={<Home />} />
            <Route path="/products" exact element={<Products />}/>  
            {/* <Route path="/search" exact element={<Search />}/>   */}
            <Route path="/favorites" exact element={<Favorites />}/>
            <Route path="/cart" exact element={<Cart />}/>
            {/* <Route path="/shoppingcart" exact>
              <ShoppingCart cartItems={Display.cartItems} handleAddproduct={Display.handleAddproduct}/>/</Route> */}
            <Route path="/about" exact element={<About />}/>  
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
