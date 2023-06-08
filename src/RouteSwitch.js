import React from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import Dont from './Dont';
import Stop from './Stop';
import Me from './Me';
import Now from './Now';

const RouteSwitch = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/dont' element={<Dont />} />
          <Route path='/stop' element={<Stop />} />
          <Route path='/me' element={<Me />} />
          <Route path='/now' element={<Now />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteSwitch;
