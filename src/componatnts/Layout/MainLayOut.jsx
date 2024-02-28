// MainLayout.js
import React from 'react';
import NavBar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
