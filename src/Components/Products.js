import axios from "axios";
import React, { useEffect, useState } from "react";
import {FaRegPaperPlane} from "react-icons/fa"

function Products() {
  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    const URL = `https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json`;
    axios.get(URL).then((response) => {
      setLoading(false);
      setItems(response.data.data.products);
    
    });
  }, []);

  return (<>
   
   <div className="container-product-selected">
  <div className="item-selected">Bags</div>
    <div><ul><li>Backpacks</li></ul></div>

  
 <div className="product-count">
  <h5>13 Products</h5>
  <div className="product-count-icon"><FaRegPaperPlane/></div>
 </div>
 
 
 <div className="banner-img">
      {loading ? (<div>Loading...........</div>) : (item?.map((product) =>




<div className="all-product-details">

<div className="image"><img src={product.plpimaage} alt="" /></div>
<div className="product-description">{product.name}</div>

<div className="product-price">$ {product.special_price}
<span className="disctOff">{product.discount_usd}</span>
</div>

<div className="actualprice">({product.price_usd}% off)</div>

</div>



         
        
        
      )
      )}


</div>
    </div>

  
   </>
  );


  
}

export default Products;
