import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { remove } from '../store/CartSlice'
const Cart = () => {
    const  item = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    console.log(item,'kkk')
  return (
    <div><h1>Cart</h1>
        {
            item ?.map((data)=>(
                <div >
                    <img src={data.image}   style={{height:'100px' ,width:'100px'}}alt="" />
                 <h4>{data.title}</h4>
                 <h4>{data.price}</h4>   
                 <button onClick={()=>dispatch(remove(data.id))}>Remove</button>             
                </div>
            ))
        }
    </div>
  )
}

export default Cart


