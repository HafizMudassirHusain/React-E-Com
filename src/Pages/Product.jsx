import { useEffect, useState } from "react";
import ProductCard from "../componet/ProductCard";
import Chip from "../componet/chip";
import Loader from "../componet/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [categories , setCategories] = useState([])
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("All")
  const [search, setSearch] = useState("")
  const [sortedProducts, setSortedProduct] = useState('')

  useEffect(() => {
    const url =  chosenCategory === "All" ? 
    'https://dummyjson.com/products'
      : `https://dummyjson.com/products/category/${chosenCategory}`
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        setProducts(res.products);
        setLoading(false);
      });
  }, [chosenCategory]);
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((res) => {
        setCategories(res);
        setLoading(false);
      });
  }, []);

  console.log(sortedProducts)
 console.log("before sorting Produst",products)

const filter = products.filter((data) => 
  data.title.toLowerCase().includes(search.toLowerCase())||
data.category.toLowerCase().includes(search.toLowerCase())
  );

 
  // Sort the filtered products based on the selected sorting option
  const handlefiltered = () => {
    const sortings = [...filter].sort((itemA, itemB) => {
      if (sortedProducts === "title") {
        return itemA.title.toLowerCase() > itemB.title.toLowerCase() ? 1 : -1;
      } else if (sortedProducts === "price") {
        return itemA.price - itemB.price;
      } else if (sortedProducts === "rating") {
        return itemB.rating - itemA.rating;
      } else if (sortedProducts === "category") {
        return itemA.category.toLowerCase() > itemB.category.toLowerCase()
          ? 1
          : -1;
      } else if (sortedProducts === "brand") {
        return itemA.brand > itemB.brand ? 1 : -1;
      }
      return 0;
    });
    setProducts(sortings);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <Loader />
      ) : (
        <div>
          {/* Category Selection */}
          <div className="flex flex-wrap m-4 p-3 justify-center items-center space-x-4">
            <Chip
              onClick={() => setChosenCategory("All")}
              isChosen={chosenCategory === "All"}
              title={"All"}
              className={`cursor-pointer px-4 py-2 rounded-full border ${chosenCategory === "All" ? 'bg-purple-500 text-white' : 'bg-gray-200'} hover:bg-purple-400 transition duration-150`}
            />
            {categories.map((data) => (
              <Chip
                title={data.slug}
                key={data.slug}
                isChosen={chosenCategory === data.slug}
                onClick={() => setChosenCategory(data.slug)}
                className={`cursor-pointer px-4 py-2 rounded-full border ${chosenCategory === data.slug ? 'bg-purple-500 text-white' : 'bg-gray-200'} hover:bg-purple-400 transition duration-150`}
              />
            ))}
          </div>

          {/* Search & Sort Options */}
          <div className="flex flex-wrap justify-center items-center my-4 space-x-4">
            <div className="flex items-center">
              <label htmlFor="search" className="mr-2 text-lg">Search Products:</label>
              <input
                type="text"
                id="search"
                value={search}
                placeholder="Search"
                className="border border-purple-500 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-purple-300"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="flex items-center">
              <select
                value={sortedProducts}
                onChange={(e) => setSortedProduct(e.target.value)}
                className="border border-purple-500 rounded-md px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                <option value="title">Sorted by Titles</option>
                <option value="price">Sorted by Price</option>
                <option value="rating">Sorted by Ratings</option>
                <option value="category">Sorted by Categories</option>
                <option value="brand">Sorted by Brands</option>
              </select>
            </div>

            <button
              onClick={handlefiltered}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-150 focus:ring-2 focus:ring-blue-300"
            >
              Filter
            </button>
          </div>
          <div className=" flex flex-wrap m-4">
            {filter.map((data, index) => (
              <ProductCard info={data} key={index} />
            ))}
          </div>
         
        </div>
        )}
    </div>
  );
}
export default Product;
