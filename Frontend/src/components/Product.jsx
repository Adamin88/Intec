/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="rounded-lg mt-6 border-2 p-4 overflow-hidden space-y-1">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          className="h-28 rounded-lg object-cover w-full mx-auto"
        />
      </Link>
      <Link to={`/product/${product._id}`}>
        <h2 className="font-semibold">{product.name}</h2>
      </Link>
      <div className="text-xs font-semibold">
        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
      </div>
      <div className="">Price: ${product.price}</div>
    </div>
  );
};

export default Product;
