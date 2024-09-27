import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { ThemeContext } from '../Context/ThemeContext';
import Loader from '../componet/Loader';

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;
  return <div>
       
        <Banner />
        <ProductShowcase />
        <Footer />
      </div>;
};


const Banner = () => {
 
  return (
    <section className="bg-cover bg-center h-64 text-white" style={{ backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0070/7032/files/Header_43a6fbaa-305a-4bda-8ef7-5e7f4e1278da.png?v=1694450194)' }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
     
        <h2 className="text-4xl font-bold">Welcome to the Best Store</h2>
      </div>
    </section>
  );
};

const ProductShowcase = () => {
  const products = [
    { id: 1, name: 'Laptops', price: '$10', image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/enhance-your-gaming-experience-with-the-latest-lenovo-ideapad-gaming-3-laptop?scl=1' },
    { id: 2, name: 'Samsung Galaxy', price: '$20', image: 'https://img.freepik.com/premium-photo/purple-phone-with-purple-background-purple-background_993259-8272.jpg' },
    { id: 3, name: 'Product 3', price: '$30', image: 'https://images.squarespace-cdn.com/content/v1/5be17631ee1759394246efeb/1613511796435-Y2Q7TV2N42X0XSD29M2U/Bottle+Mock+Ups+-+Violet+Leaf%2C+Sandalwood%2C+Lily.jpg?format=1000w' },
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 My E-Commerce Site</p>
    </footer>
  );
};

export default Home;
