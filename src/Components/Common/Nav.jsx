import React, { useContext } from 'react'
import SearchAppBar from '../SearchAppBar';
import Layout from 'antd/es/layout/layout';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { cartCreate } from '../../CartContext';

const { Header } = Layout;


const Nav = (props) => {
  
  const {setUserEmail, setUserPassword, setGoogleEmail} = useContext(cartCreate)

  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userPassword');
      localStorage.removeItem('google_email');
      setUserEmail(null);
      setUserPassword(null);
      setGoogleEmail(null);
    }, 1000)
  };    // const ver = [props.no];

    const navItem =[
            { label: 'Home', path: '/home' },
            { label: 'Movies', path: '/movies' },
            { label: 'View cart', path: '/viewcart' },
            { label: 'Booked Show', path: '/book' },
            { label: 'Logout', path: '/', click : handleLogout },
          ];

    const items = navItem.map((item) => ({
        key: item.path,
        label: <Link to={item.path} className='text-decoration-none' onClick={item.label === 'Logout' ? handleLogout : null}>{item.label}</Link>,
      }));


  return (
    <>
        <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
        className='text-white '
      >
        <div className="demo-logo text-danger fs-5 me-3">BookNow</div>
        <SearchAppBar setSearch={props.setSearch}  />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[props.no]}
          className='ms-3'
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
          
        />
      </Header>
    </>
  )
}

export default Nav