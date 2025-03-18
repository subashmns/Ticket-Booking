import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import Carousels from './Components/Carousels';
import Fetching from './Components/Fetching';
import Nav from './Components/Common/Nav';
import { auto, right } from '@popperjs/core';
const { Content, Footer } = Layout;

const RouteFile = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


const [search, setSearch] = useState('');



const breadcrumbItems = [
  {
    title: 'Home',
  },
];
  return (
    <Layout>
      
        <Nav setSearch =  {setSearch} no = '/home' />
      
     
        <Breadcrumb
        className='ms-3'
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
          <Carousels/>
          <Fetching search = {search} />
          
        </div>
      
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
export default RouteFile;