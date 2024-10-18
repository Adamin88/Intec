import {useState, useEffect} from 'react'
import Product from '../components/Product'
import axios from 'axios'

const Homescreen = () => {
  const[products, setProducts] = useState([])

  const getProducts = async () => {
      const response = await axios.get("http://127.0.0.1:1988/api/products");
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } 
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <div className='mx-28'>
        <h1 className='text-center font-bold'>Latest Products</h1>
        <div className='grid grid-cols-3 justify-items-center'>
            {products.map(product => (
                <div key={product._id}>
                    <Product product={product}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Homescreen