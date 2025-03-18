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
      // Show error message here if necessary.
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


      <div className="container  ">
        <div className='row mx-auto'>
          {filtering.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <div className=' col-sm-6 col-md-3 col-lg-3 col-xl-3 '>
                  <ProductCard name={item.name} img={item.image} releasedate={item.releasedate} ticketprice={item.ticketprice} director ={item.director} id ={item._id}/>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </div>


    </>
  )
}

export default Fetching