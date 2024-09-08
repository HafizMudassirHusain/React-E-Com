import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Header from './componet/Header'
import ThemeContextProvider from './Context/ThemeContext';
import ProtectedRoute from './componet/ProtectedRoute';

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Protect routes */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute><Product /></ProtectedRoute>} />
          <Route path="/products/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
          <Route path="/aboutus" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
          <Route path="/contactus" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
