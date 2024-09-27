import { Link } from "react-router-dom";


function ProductCard({ info }) {

  return (
   
    <Link to={`/products/${info.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow hover:shadow-xl transform transition-all duration-300">
      <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
        <span className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transform hover:scale-110 transition-transform duration-500 ease-in-out"
            src={info.thumbnail}
          />
        </span>
        <div className="mt-4">
          <h3 className="text-blue-500 text-xs tracking-widest title-font mb-1">
            {info.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {info.title}
          </h2>
          <p className="mt-1">${info.price}</p>
        </div>
      </div>
    </Link>

  );
};

export default ProductCard;
