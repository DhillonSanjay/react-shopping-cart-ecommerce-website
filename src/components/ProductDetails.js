import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function ProductDetails({ cart, setCart }) {
  let { id } = useParams();
  let [product, setProduct] = useState({});
  let [relatedproducts, setrelatedproducts] = useState([]);

  useEffect(() => {
    let filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    let relatedProduct = items.filter((p) => p.category === product.category);
    setrelatedproducts(relatedProduct);
  }, [id, product.category]);

 
  let addToCart = (id, price, title, description, imgSrc)=>{
    const obj = {
      id, price, title, description, imgSrc
    }

    setCart([...cart, obj])
    toast.success('Item Added on cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <>
  
      <div className="container d-flex justify-content-center align-items-center">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">
                        {product.price} ₹
                      </button>
                      <button className="btn btn-warning" onClick={()=>addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}>Add To Cart</button>
        </div>
      </div>
      <h1 className="text-center mb-4">Realted Product</h1>
      <Product cart={cart} setCart={setCart} items={relatedproducts} />
    </>
  );
}

export default ProductDetails;
