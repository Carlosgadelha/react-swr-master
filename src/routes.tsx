//import React from 'react';


import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<UserList />} />
        <Route path="/users/:id"element ={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}