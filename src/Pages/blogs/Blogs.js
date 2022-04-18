import React from "react";
import styled from 'styled-components';
import BlogItem from './BlogItem';
import img1 from '../images/port1.png';
import img2 from '../images/port2.png';
import img3 from '../images/port3.png';
import img4 from '../images/port4.png';
import img5 from '../images/port5.png';
import img6 from '../images/port6.png';

const Blogs = () => {
  return (
    <BlogsStyle>
      <div className="blog-content">
        <div className="main-title">
          <h2>
            My <span>Blogs</span>
            <span className="bg-text">My Blogs</span>
          </h2>
        </div>
        <div className="blogs">
          <BlogItem img={img1}/>
          <BlogItem img={img2}/>
          <BlogItem img={img3}/>
          <BlogItem img={img5}/>
          <BlogItem img={img4}/>
        </div>
      </div>
    </BlogsStyle>
  );
};

export default Blogs;

const BlogsStyle = styled.section`
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem 2rem;
    margin-top: 3rem;
  }
`;