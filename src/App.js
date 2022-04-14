import React from 'react';
import styled from 'styled-components';
import Sidebar from './component/Sidebar';
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Project from './Pages/Project';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact'
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