import React, { useState, useEffect } from "react";
import axios from "axios";
import "./product.css";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";

const Products = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch( )
 console.log(dispatch,'disoatch')

  const fatchProduct = async () => {
    await axios.get(" https://fakestoreapi.com/products").then(
      (response) => setProduct(response.data)
      //  console.log(response.data)
    );
  };
  useEffect(() => {
    fatchProduct();
  }, []);

  return (
    <div >
  <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto auto'}}>
     { product.map((item)=> (
      <div >
        <div >
        <img style={{height:'100px',width:'100px'}} src={item.image} alt="" />
        <h5>{item.title}</h5>
        <button  style={{ padding:'10px',borderRadius:'10px', background:' rgb(37, 150, 190)'}}onClick={()=>  dispatch(add(item))}>Add to Cart</button>
        </div>
        
      </div>
     ))}
    </div>     
    </div>
  );
};

export default Products;
