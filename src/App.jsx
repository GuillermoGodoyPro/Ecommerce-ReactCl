import React from 'react';
// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
//Import pages

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </Router>
      <Sidebar/>
      <Footer/>
    </div>
  );
};

export default App;
