import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactStyle>
      <div className="contact-container">
                <div className="main-title">
                    <h2>
                        Contact <span>Me</span><span className="bg-text">Contacts</span>
                    </h2>
                </div>
                <div className="contact-content-con">
                    <div className="left-contact">
                        <h4>Contact me here</h4>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                            similique, pariatur ipsam voluptas reiciendis aperiam!
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                    Location
                                </div>
                                <p>: Kolkata, West Bengal, India</p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                    <span>Email address</span>
                                </div>
                                <span> : sksony2698@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-address-book"></i>
                                    <span>Contact</span>
                                </div>
                                <p>: +91 930 4310 227</p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-globe"></i>
                                    <span>Language</span>
                                </div>
                                <p>: Hindi and English</p>
                            </div>
                        </div>
                        <div className="contact-icons">
                            <div className="contact-icon">
                                <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            </div>
                            <div className="contact-icon">
                                <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="contact-icon">
                                <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                            </div>
                            <div className="contact-icon">
                                <a href="#" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="right-contact">
                        <form action="" className="contact-form">
                            <div className="input-control i-c-2">
                                <input type="text" required placeholder="YOUR NAME" />
                                <input type="email" required placeholder="YOUR EMAIL" />
                            </div>
                            <div className="input-control">
                                <input type="text" required placeholder="YOUR SUBJECT" />
                            </div>
                            <div className="input-control">
                                <input type="text" required placeholder="YOUR SUBJECT" />
                            </div>
                            <div className="input-control">
                                <textarea name="" id="" cols="15" rows="8" placeholder="Massage Here..."></textarea>
                            </div>
                            <div className="submit-btn">
                                <a href="#" className="main-btn">
                                    <span className="btn-text">Submmit</span>
                                    {/* <!-- <span className="btn-icon"><i className="fas fa-download"></i></span> --> */}
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </ContactStyle>
  );
}

export default Contact;

const ContactStyle = styled.section`
  .contact-content-con {
    // display:flex;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    padding-top: 3.5rem;
    .left-contact {
      // flex:3;
      h4 {
        margin-top: 1rem;
        font-size: 1.2rem;
        text-transform: uppercase;
      }
      p {
        margin: 1rem 0;
        line-height: 1.5rem;
      }
      .contact-info {
        .contact-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          p {
            margin: 0.3rem 0 !important;
            padding: 0 !important;
          }
          .icon {
            display: grid;
            grid-template-columns: 40px 1fr;
            i {
              display: flex;
              align-items: center;
              font-size: 1.3rem;
            }
          }
        }
      }
      .contact-icons {
        display: flex;
      }
      .contact-icon {
        display: flex;
        margin-top: 2rem;
        a {
          display: flex;
          align-items: center;
          color: var(--color-white);
          background: var(--color-gray-5);
          cursor: pointer;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: 0 0.4rem;
          transition: all 0.4s ease-in-out;
          &:hover {
            background: var(--color-secondary);
            transform: translateY(-5px);
            i {
              color: var(--color-primary);
            }
          }
          i {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
          }
        }
      }
    }

    .right-contact {
      // flex:3;
      // margin-left:3rem;
      .input-control {
        margin: 1rem 0;
        input,
        textarea {
          font-weight: inherit;
          font-size: 1.1rem;
          font-family: inherit;
          border-radius: 20px;
          padding: 0.5rem 1.1rem;
          outline: none;
          border: none;
          background-color: var(--color-gray-5);
          width: 100%;
          color: var(--color-white);
          resize: none;
        }
      }
      .i-c-2 {
        display: flex;
        :last-child {
          margin-left: 1.5rem;
        }
      }
      .submit-btn {
        display: flex;
        justify-content: flex-start;
        .main-btn {
          padding: 0.8rem 1.5rem;
        }
      }
    }
  }
`;