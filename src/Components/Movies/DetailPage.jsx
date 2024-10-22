import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import Nav from '../Common/Nav';
import DetailPageCard from '../DetailPageCard';
const { Content, Footer } = Layout;

const RouteFile = () => {


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const values = ''

const [search, setSearch] = useState('');

  return (
    <Layout>
      
        <Nav setSearch = {setSearch} no = {values} search ={search} />
      
      <Content
        style={{
          padding: '0 48px',
        }}
      >
          
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
            height:`100%`
          }}
        >
          <DetailPageCard/>
          
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
export default RouteFile;