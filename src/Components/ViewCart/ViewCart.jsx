import React, { useContext, useEffect, useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import Nav from '../Common/Nav';
import { cartCreate } from '../../CartContext';
import { Card } from 'antd';
const { Content, Footer } = Layout;

const ViewCart = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


const [search, setSearch] = useState('');

const {addCart, setCart } = useContext(cartCreate);

const [total, setTotal] = useState(0);
useEffect(() =>{
  setTotal(addCart.reduce((acc, curr) => acc + parseInt(curr.ticketprice), 0));
}, [addCart]);


const breadcrumbItems = [
  {
    title: 'View to Cart',
  },
];

const removeCard = (id) => {
  const newCart = addCart.filter(item => item.id !== id)
  setCart(newCart)
}

  return (
    <Layout>
      
        <Nav setSearch =  {setSearch} no = '/viewcart' search={search} />
      
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
          items={breadcrumbItems}
        />
          
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
            height:`100%`
          }}
        >
          {addCart.map((items) => (
            <div className="row mt-3" key={items.id}>
              <div className="col-md-6 ">
                <Card
                  className=' mx-0 mx-sm-2'
                  hoverable
                  style={{
                    width: 290,
                    marginTop: '14px',
                  }}
                  cover={<img alt="example1" src={items.image} />}
                  >
                  <Card.Meta title={items.name} />

                  </Card>
              </div>
              <div className="col-md-6  p-5" >
                <h5>{items.name}</h5>
                <p>Language: English</p>
                <p>Duration: 2hrs</p>
                <p>Price: {items.ticketprice} </p>
                <button className='btn btn-danger' onClick={()=> removeCard(items.id)}>Remove From Cart</button>
                {/* <button className='btn btn-danger' onClick={()=> addCard(items.id)}>Book Ticket</button> */}
              </div>
          </div>
          ))}
          <h2 className='pt-4'>Total Amount : ${total}</h2>
          
        </div>

          
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
       Ticket Book Now ©{new Date().getFullYear()} Created by Subash Ebanezer
      </Footer>
    </Layout>
  );
};
export default ViewCart;