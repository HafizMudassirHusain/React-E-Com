import { useState } from 'react'
import './App.css'
import Product from './Pages/Product'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails'
import Header from './componet/Header'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'

function App() {
 

  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route index path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs />}/>
      <Route path='/contactus' element={<ContactUs />}/>
      <Route path='/products' element={<Product />}/>
      <Route path='products/:id' element={<ProductDetails />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
