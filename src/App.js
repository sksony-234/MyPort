import React from 'react';
import styled from 'styled-components';
import Sidebar from './component/Sidebar';
import Home from './Pages/home/Home'
import About from './Pages/about/About'
import Services from './Pages/service/Services'
import Project from './Pages/project/Project';
import Blogs from './Pages/blogs/Blogs';
import Contact from './Pages/contact/Contact'
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Sidebar />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/projects" element={<Project />}></Route>
          <Route path="/blog" element={<Blogs/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </MainContent>
    </>
  );
}

export default App

const MainContent = styled.div`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
`;