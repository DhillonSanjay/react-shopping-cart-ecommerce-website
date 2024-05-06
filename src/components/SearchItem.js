import { useParams } from 'react-router-dom'
import { items } from './Data';
import { useState, useEffect } from 'react';
import Product from './Product';

function SearchItem({cart, setCart}) {
  const [filterData, setfilterData] = useState([])
  const {term} = useParams();

useEffect(() =>{
  let filteredData = () =>{
  const data = items.filter((p)=>p.title.toLowerCase().includes(term.
    toLowerCase()));
    setfilterData(data);
}

filteredData()

},[term])

  return (
    <>
     <Product cart={cart} setCart={setCart}  items={filterData}/>
    </>
  )
}

export default SearchItem
