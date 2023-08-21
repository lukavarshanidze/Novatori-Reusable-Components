import { categoryState, limitState, sortState } from "@/app/states";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default () => {
    const [products, setProducts] = useState([]);
    const [sort] = useRecoilState(sortState)
    const[limit] = useRecoilState(limitState)
    const[category] = useRecoilState(categoryState)

    
    useEffect(() => {
        let url = 'https://fakestoreapi.com/products';
      
        if (category) {
          url += `/category/${category}`;
        }
      
        url += `?sort=${sort}&limit=${limit}`;
      
        axios.get(url)
          .then((result) => {
            setProducts(result.data);
          });
      }, [sort, limit, category]);
      

    return(
        <ul>
        {
          products.map((product:any) => 
          <li>
            <img src={product.image} width='100'/>
            {product.title}
          </li>)
        }

      </ul>
    )
}

