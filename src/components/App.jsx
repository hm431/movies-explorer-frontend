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
            element={<ProtectedRoute
              loggedIn={loggedIn}
              element={Profile} />} />

          <Route
            path="/singup"
            element={<Registration />} />

          <Route
            path="/signin"
            element={<Login />} />

          <Route
            path='/main'
            element={<movies />} />


          <Route
            path='/saved'
            element={<saved-movies/>} />


          <Route
            path="/404"
            element={<NotFound />} />
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
