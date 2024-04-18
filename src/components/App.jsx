import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { useState } from 'react';
import Profile from './Profil';
import Lending from './Lending';
import Login from './Login';
import Registration from './Registration';
import Main from './Main';
import Saved from './Saved';





function App() {


  
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('jwt'));

  const handleLogin = () => {
    setLoggedIn(true);
  }

  return (
    <div className="App">  


<BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Lending/>}/>

          <Route
            path="/my-profile"
            element={<ProtectedRoute
              loggedIn={loggedIn}
              element={Profile} />} />

          <Route
            path="/singUp"
            element={<Registration/>} />

          <Route
            path="/login"
            element={<Login />} />

          <Route
          path='/main'
          element={<Main/>}/>
              
            <Route
            path='/saved'
            element={<Saved />} />
        </Routes>

      </BrowserRouter>

      
    </div>
  );
}

export default App;
