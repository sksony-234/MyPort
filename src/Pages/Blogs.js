import React from "react";
import styled from 'styled-components';
import img1 from './images/port1.png';
import img2 from './images/port2.png';
import img3 from './images/port3.png';
import img4 from './images/port4.png';
import img5 from './images/port5.png';
import img6 from './images/port6.png';

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
          <div className="blog">
            <img src={img3} alt="" />
            <div className="blog-text">
              <h4>How to create own website</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                iste laboriosam neque sit dolore? Perspiciatis
              </p>
            </div>
          </div>
          <div className="blog">
            <img src={img2} alt="" />
            <div className="blog-text">
              <h4>How to create own website</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                iste laboriosam neque sit dolore? Perspiciatis
              </p>
            </div>
          </div>
          <div className="blog">
            <img src={img1} alt="" />
            <div className="blog-text">
              <h4>How to create own website</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                iste laboriosam neque sit dolore? Perspiciatis.
              </p>
            </div>
          </div>
          <div className="blog">
            <img src={img5} alt="" />
            <div className="blog-text">
              <h4>How to create own website</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                iste laboriosam neque sit dolore? Perspiciatis.
              </p>
            </div>
          </div>
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
    .blog {
      position: relative;
      background: var(--color-gray-5);
      border-radius: 5px;
      box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.4s ease-in-out;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 5px 5px 0 0;
        filter: grayscale(100%);
        transition: all 0.4s ease-in-out;
      }
      &:hover {
        box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
        transform: translateY(-5px);
        transition: all 0.4s ease-in-out;
        img {
          filter: grayscale(0);
          transform: scale(1.1);
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.8);
          border-radius: 5px;
        }
      }
      .blog-text {
        padding: 1.1rem;
        border-top: 8px solid var(--color-secondary);
        margin-top: -8px;
        h4 {
          font-size: 1.2rem;
          margin-bottom: 0.7rem;
          cursor: pointer;
          transition: all 0.4s ease-in-out;
          &:hover {
            color: var(--color-secondary);
          }
        }
        p {
          color: var(--color-gray-2);
          line-height: 1rem;
          padding-bottom: 1rem;
        }
      }
    }
  }
`;