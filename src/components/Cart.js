import React from 'react'
import { Link } from 'react-router-dom'
function Cart({cart, setCart}) {
  return (
    <>
    <div className="container my-5" style={{width:'54%'}}>
    {
    cart.length==0 ?(
<>
  <div className="text-center">
    <h1>Your Cart is Empty</h1>
    <Link to={"/"} className="btn btn-warning">Continue Shopping...</Link>
  </div>
</>
    ):
    cart.map((product)=>{
      return(
        <>
        <div className="card mb-4 mt-4 m-auto my-5" style={{width:'700px'}}>
  <div className="row g-0 align-item-center">
    <div className="col-md-4">
      <img src={product.imgSrc} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-center">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

        <button className="btn btn-primary mx-3">
                        {product.price} ₹
                      </button>
                      <button className="btn btn-warning">Buy Now</button>
      </div>
    </div>
  </div>
</div>
        </>
      )
    })}
      
      
</div>
{
        cart.length!=0 && (
          <div className='container text-center'>
<button className="btn btn-warning mx-3">
      CheckOut
                      </button>
                      <button className="btn btn-danger" onClick={()=>setCart("")}>Clear Cart</button>
</div>
        )
      }

    </>
  )
}

export default Cart
