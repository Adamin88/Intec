import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";


const ProductScreen = () => {
  const { id } = useParams();
  const[product, setProduct] = useState({});
  
  const getProduct = async () => {
    const response = await axios.get(`http://127.0.0.1:1988/api/products/${id}`);
    setProduct(response.data);
    };

useEffect(() => {
  getProduct();
}, []);


  const stockStyle = {
    color: product.countInStock ? "green" : "red",
  };

  return (
    <div className=" mx-28 p-3">
      <Link to={"/"} className=" border px-1 rounded-full hover:border-2"><button>Go back</button></Link>
      <div className="grid grid-cols-5 gap-4 my-5">
        <img src={product.image} alt={product.name} className="rounded-lg col-span-2"/>
        <div className="space-y-5 col-span-2">
          <h2 className="border-b-2 text-2xl font-semibold w-fit">{product.name}</h2>
          <div className="text-xs border-b-2 w-fit"><Rating value={product.rating} text={`${product.numReviews} reviews`}/></div> 
          <div className="border-b-2 w-fit">Price: ${product.price}</div>
          <div className=""><strong>Description:</strong> {product.description}</div>
        </div>
        <div className="col-span-1 border rounded-lg p-1 text-center">
          <h3 className="font-semibold">By new:</h3>
          <div className="text-2xl text-fuchsia-500">${product.price}</div>
          <p style={stockStyle}>Status: {product.countInStock > 0 ? "In stock" : "Out of stock "}</p>
          <button className="bg-yellow-400 font-bold p-1 rounded-md" type="button" disabled={product.countInStock===0}>Add To Cart</button>
        </div>
        
      </div>
      


    </div>
  )
};

export default ProductScreen;
