import React from 'react';
import { items } from './Data';

function Footer({ setData }) { // Ensure to destructure setData from props

    let filterByCategory = (category) => {
        let element = items.filter((product) => product.category === category);
        setData(element);
    };

    return (
        <>
            <div className='footer'>
                
                    <div className="items" onClick={() => filterByCategory('mobiles')}>Mobile</div>
                    <div className="items" onClick={() => filterByCategory('laptops')}>Laptop</div>
                    <div className="items" onClick={() => filterByCategory('tablets')}>Tablets</div>
                
            </div>
        </>
    );
}

export default Footer;
