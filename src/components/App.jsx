import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { useState } from 'react';
import Profile from './Profil';
import Lending from './Lending';
import Login from './Login';
import Registration from './Registration';
import Main from './Main';
import Saved from './Saved';
import NotFound from "./NotFound";
import Account from './Account';



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
            element={<Lending />} />

          <Route
            path="/profile"
            element={<Profile />}
            //element={//<ProtectedRoute
              //loggedIn={loggedIn}
              //element={Profile />} />//} />
              />

          <Route
            path="/signup"
            element={<Registration />} />

          <Route
            path="/signin"
            element={<Login />} />

          <Route
            path='/movies'
            element={<Main />} />


          <Route
            path='/saved-movies'
            element={<Saved/>} />


          <Route
            path="*"
            element={<NotFound />} />

<Route
            path="/accaunt"
            element={<Account />} />


            
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
