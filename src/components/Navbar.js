import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { items } from './Data'
import { BsCartCheckFill } from "react-icons/bs";

function Navbar({setData, cart}) {

   let [searchTerm, setSearchTerm] = useState("")
  let navigate = useNavigate()

  //let location = useLocation();

  let filterByCategory= (category)=>{
   let element = items.filter((product)=>product.category===category)
   setData(element)
  }

  let filterByPrice = (price) =>{
   let element = items.filter((product)=>product.price>=price)
    setData(element)
   }

   let handleSubmit = (e)=> {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
   }
  return (
  <>
    <header className='sticky-top'>
        <div className="nav-bar">
            <div  className="brand"><Link to="/"> amazon</Link></div>
            <form className="search-bar" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search Products" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
            </form>
            <div className="cart"> <Link to="/cart" >

<button type="button" className="btn btn-primary position-relative">
<BsCartCheckFill/>  
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
{cart.length}
<span className="visually-hidden">unread messages</span>
</span>
</button>
            </Link></div>
        </div>

    <div className="nav-bar-wrapper">
             <div className="items"  onClick={()=>setData(items)}>No Filter</div>
             <div className="items" onClick={()=>filterByCategory('mobiles')}>Mobile</div>
             <div className="items"  onClick={()=>filterByCategory('laptops')}>Laptop</div>
             <div className="items"  onClick={()=>filterByCategory('tablets')}>Tablets</div>
             <div className="items" onClick={()=>filterByPrice('29999')}>{">="}29999</div>
             <div className="items" onClick={()=>filterByPrice('39999')}>{">="}39999</div>
             <div className="items" onClick={()=>filterByPrice('49999')}>{">="}49999</div>
             <div className="items" onClick={()=>filterByPrice('59999')}>{">="}59999</div>
        </div>

    </header>
  </>
  )
}

export default Navbar
