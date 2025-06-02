import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({
  children
}) => {
  return <div className="flex flex-col min-h-screen bg-stone-50">
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>;
};
export default Layout;