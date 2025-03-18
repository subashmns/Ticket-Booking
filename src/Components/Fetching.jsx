import ProductCard from '../Components/card';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fetching = (props) => {
  const [setData, setIn] = useState([])

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    try {
      const response = await axios.get('https://backend-crud-one.vercel.app/product')
      setIn(response.data);  
    }
    catch (err) {
      console.log(err);
    }
  }

  const filtering = setData.filter((product) => {
    const matchesSearch =
      props.search.toLowerCase() === ""
        ? product
        : product.name.toLowerCase().includes(props.search.toLowerCase());
    return matchesSearch;
  })

  return (
    <>
      {setData.length === 0 && <p>Loading...</p>}

      <div className="container-fluid">

        <div className='row g-3'>
          {filtering.map((item) => {
            return (
              <div key={item.id} className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'>
                <ProductCard 
                  name={item.name} 
                  img={item.image} 
                  releasedate={item.releasedate} 
                  ticketprice={item.ticketprice} 
                  director={item.director} 
                  id={item._id}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Fetching;
