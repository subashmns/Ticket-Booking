import './App.css';
import RouteFile from './RouteFile';
import DetailPage from './Components/Movies/DetailPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Movies from './Components/Movies/Movies';
import ViewCart from './Components/ViewCart/ViewCart';
import Booking from './Components/Book/Booked';
import { cartCreate } from './CartContext';
import { useEffect, useState } from'react';
import Login from './Components/Loginpage/Login';
import ProtectedRoute from './ProductedRoute'; 
// import { AddCard } from '@mui/icons-material';


function App() {
  const [addCart, setCart] = useState([]); 
  const[userEmail, setUserEmail] = useState(null);
  const[userPassword, setUserPassword] = useState(null);
  const [loading, setLoading] = useState(true);
  const [google, setGoogleEmail] = useState(null);

  useEffect(()=>{
    const storeEmail = localStorage.getItem('userEmail')
    const storePassword = localStorage.getItem("userPassword")
    const storeGoogle = localStorage.getItem("google_email")

    if(storeEmail && storePassword){
      setUserEmail(JSON.parse(storeEmail));
      setUserPassword(JSON.parse(storePassword));
      
    }
    if(storeGoogle){
      setGoogleEmail(JSON.parse(storeGoogle));
    }
    setLoading(false)
  },[]);

  if (loading) {
    return <div>Loading...</div>; // Optionally, you can have a loader or splash screen here
  }

  const isAuthenticated = (!!userEmail && !!userPassword ) || (!!google) ;

  return (
      <cartCreate.Provider value={{
        addCart,
        setCart,
        setUserEmail,
        setUserPassword,
        setGoogleEmail
      }}>
        <BrowserRouter>
        {/* {userEmail && <Nav setUserEmail={setUserEmail} />} */}
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated}><RouteFile /></ProtectedRoute>} />
              <Route path='/movies' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Movies /></ProtectedRoute>} />
              <Route path='/viewcart' element={<ProtectedRoute isAuthenticated={isAuthenticated}><ViewCart /></ProtectedRoute>} />
              <Route path='/book' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Booking /></ProtectedRoute>} />
              <Route path="/product/:_id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><DetailPage /></ProtectedRoute>} />
              {/* <Route path="*" element={<Navigate to="/home" />} />  */}
          </Routes>
        </BrowserRouter>
      </cartCreate.Provider>
  );
}

export default App;
