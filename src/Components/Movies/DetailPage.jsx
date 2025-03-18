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
        
      >
          
        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height:`100%`
          }}
        >
          <DetailPageCard/>
          
        </div>
      </Content>
      
    </Layout>
  );
};
export default RouteFile;