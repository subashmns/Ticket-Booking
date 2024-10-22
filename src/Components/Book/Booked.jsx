import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import Nav from '../Common/Nav';
const { Content, Footer } = Layout;

const Booking = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


const [search, setSearch] = useState('');



const breadcrumbItems = [
  {
    title: 'Booked Show',
  },
];
  return (
    <Layout>
      
        <Nav setSearch =  {setSearch} no ='/book' search={search} />
      
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
            height:"100%"
          }}
        >
                
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
export default Booking;