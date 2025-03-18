import { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import Fetching from '../Fetching';
import Nav from '../Common/Nav';
const { Content, Footer } = Layout;

const Movies = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


const [search, setSearch] = useState('');



const breadcrumbItems = [
  {
    title: 'Movies',
  }
];
  return (
    <Layout>
      
        <Nav setSearch =  {setSearch} no = '/movies' />
      
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
            padding: 0,
            borderRadius: borderRadiusLG,
            height:`100%`
          }}
        >
          <Fetching search = {search} />
          
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
export default Movies;