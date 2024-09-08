import { useEffect, useState } from "react";
import ProductCard from "../componet/ProductCard";
import Chip from "../componet/chip";
function Product() {
  const [products, setProducts] = useState([]);
  const [categories , setCategories] = useState([])
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("All")

  useEffect(() => {
    const url =  chosenCategory == "All" ? 
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
  const [search, setSearch] = useState("")

const filter = products.filter((data) => data.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="flex justify-center items-center">
         
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <div className="flex flex-wrap m-4 p-3">
            <Chip isChosen={chosenCategory == "All"} title={"All"}/>
            {categories.map((data)=>(
              <Chip  title={data.slug} 
              key={data.slug} 
              isChosen={chosenCategory == data.slug}
              onClick={()=> setChosenCategory(data.slug)}/>
            ))
            }
          </div>
         <div>
          <input type="text"
          value={search}
          placeholder="Enter Title for Seach"
          className="border border-purple-500 rounded-md mx-40 p-4"
          onChange={(e)=>setSearch(e.target.value)}
          />
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
