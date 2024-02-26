import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { callApi } from '../utils/CallApi';
import { ProductDetails } from './'
import {GB_CURRENCY} from "../utils/Constants"


const SearchResult = () => {
  const [SearchParams] = useSearchParams();

  const [products, setProducts] = useState(null);

  const getSearchResult = () => {
    const searchTerm = SearchParams.get('searchTerm');
    const category = SearchParams.get('category');

    callApi(`data/search.json`).then((SearchResults) => {
      const categoryResults = SearchResults[category];

      console.log(categoryResults)
      if (categoryResults) {
        if (searchTerm) {
          const results = categoryResults.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setProducts(results);
        } else {
          setProducts(categoryResults);
        }
     }
      
      // else {
      //   // Handle the case where categoryResults is undefined
      //   setProducts([]);
      // }
    });
  };

  useEffect(() => {
    getSearchResult();
  }, [SearchParams]);

  return (
    <div className='min-w-[1200px] max-w-[1300px] m-auto pt-4'>
      {products &&
        products.map((product, key) => {
          return(
          <Link  key={key} to={`/product/${product.id}`} >
           <div className='h-[250px] grid grid-cols-12 rounded mt-1 mb-1'>
            <div className='cols-span-2 p-4 bg-gray-200' >

<img className='m-auto' src={product.image_small}></img>
            </div>
            <div className='col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100'>
<div className='font-medium text-black p-2'>

  <ProductDetails product={product} ratings={true}></ProductDetails>
  <div className='text-xl xl:text-2xl pt-1' >{GB_CURRENCY.format(product.price)}</div>
</div>
            </div>
            </div>
          </Link>
          )
        })}
    </div>
  );
};

export default SearchResult;
