import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${
      "" /* :root{
        --primary-color:#007bff;
        --secondary-color:#6c757d;
        --background-dark-color:#10121a;
        --background-light-color:#f1f1f1;
        --white-color:#fff;
        --font-light-color:#a4acc4;
        --font-dark-color:#313131;
        --font-dark-color-2:#151515;
        --sidebar-dark-color:#191d2b;
    } */
    }

    :root{
        --color-primary:#191d2b;
        --color-secondary:#27ae60;
        --color-white:#fff;
        --color-black:#000;
        --color-gray0:#f8f8f8;
        --color-gray-1:#dbe1e8;
        --color-gray-2:#b2becd;
        --color-gray-3:#6c7983;
        --color-gray-4:#454e56;
        --color-gray-5:#2a2e35;
        --color-gray-6:#12181b;
        --br-sm-2:14px;
        --box-shadow-1:0 3px 15px rgba(0, 0, 0, 0.3);
        --border-color:#2e344e;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style:none;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        background-color:var(--color-primary);
        font-family: 'Poppins', sans-serif;
        font-size:1.1rem;
        color:var(--color-white);
        transition:all .4s ease-in-out;
        ${'' /* padding:0rem 3.5rem; */}
    }
    a{
        color:inherit;
        font-family: inherit;
        font-size: inherit;
        text-align:center;
    }

    ${"" /* button styling */}
    .btn-con{
        display:flex;
    }
    .main-btn{
        color:inherit;
        border-radius:30px;
        font-weight:600;
        position:relative;
        border:1px solid var(--color-secondary);
        align-items:flex-start;
        display:flex;
        align-items:center;
        overflow:hidden;
        .btn-text{
            padding:0px 2rem;
        }
        .btn-icon{
            background:var(--color-secondary);
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius:50%;
            padding:1rem;
        }
        &::before{
            content:"";
            position:absolute;
            top:0;
            right:0;
            background-color:var(--color-secondary);
            transition:all 0.4s ease-in-out;
            transform:translateX(100%);
            z-index:-1;
        }
        &:hover{
            &::before{
                transition:all 0.4s ease-in-out;
                height:100%;
                width:100%;
                transform:translateX(0%);
            }
        }
    }

    ${"" /* Title */}
    .main-title{
        h2{
            text-align: center;
            position:relative;
            font-size:3rem;
            font-weight:700;
            text-transform: uppercase;
            span{
                color:var(--color-secondary);
            }
            .bg-text{
                position:absolute;
                top:50%;
                left:50%;
                color:var(--color-gray-5);
                font-size:5rem;
                transform:translate(-50%, -50%);
                transition:all 0.4 s ease-in-out;
                z-index:-1;
            }
        }
    }
`;

export default GlobalStyle;
