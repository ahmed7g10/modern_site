import React from 'react';
import "./App.css";
import leftTopsvg from '../src/assest/svg/top_left.svg';
import Navbar from './components/navbar/Navbar';
import Build from './sections/build/Build';
import Company from './sections/company/Company';
import What from './sections/what/What';
import Future from './sections/future/Future';
import Access from './sections/access/Access';
import Boxalert from './components/boxalert/Boxalert';
import Blog from './sections/blog/Blog';
import Footer from './sections/footer/Footer';
const App = () => {
  return (
    <div className='all'>
      <div className='top__svg'>
        <img src={leftTopsvg} alt=""/>
      </div>
      <Navbar/>
      <Build/>
      <Company/>
      <What/>
      <Future/>
      <Access/>
      <Boxalert/>
      <Blog/>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
