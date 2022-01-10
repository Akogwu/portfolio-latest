import React, {Fragment} from 'react';
import styled from "styled-components";
import {Container} from "react-bootstrap";
import {BsGithub,  BsLinkedin} from "react-icons/bs";
import CustomLink from "./CustomLink";

const Navbar = () => {
    return (
        <Fragment>
            <Container>
                <NavbarWrapper>
                    <div className="brand text-white">
                        <pre>
                            <pre> <span className="tag">{ '</>' }</span> <span className="firstname">Emmanuel</span><span className="lastname"> Akogwu</span> </pre>
                        </pre>
                    </div>
                    <Menu>
                        <ul>
                            <li><CustomLink to='/'>Home</CustomLink></li>
                            <li><CustomLink to="/skills">My skills</CustomLink></li>
                            <li><CustomLink to="/portfolio">Portfolio</CustomLink></li>
                            <li><CustomLink to="/contact">Contact me</CustomLink></li>
                        </ul>
                    </Menu>
                    <SocialIcons>
                        <ul>
                            <li><CustomLink to="https://linkedin.com"> <BsLinkedin/> linkedIn</CustomLink></li>
                            <li><CustomLink to="https://github.com"><BsGithub/> Github</CustomLink></li>
                        </ul>
                    </SocialIcons>
                </NavbarWrapper>
            </Container>
        </Fragment>
    );
};

const NavbarWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: 2rem 0;
    color: white;
    &  a{
      text-decoration: none;
      color: white;
      
      &.active{
        &:before{
          content: "< ";
        }
        &:after{
          content: " />";
        }
        color: ${ props => props.theme.primaryColor };
      }
    }  
  
  .brand{
    font-size: 1.5rem;
    pre{
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
    .firstname{
      color: ${p => p.theme.primaryColor};
    }
    .lastname{
      color: #c0c0c0;
    }

    .tag{
      color: ${p => p.theme.secondaryColor};
    }
  }
  
`;

const Menu = styled.div`
  flex: 2;
    ul{
      display:flex;
      justify-content: center;
      gap: 2rem;
      list-style-type: none;
    }
`;

const SocialIcons = styled.div`
  ul{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    list-style-type: none;
  }
`;

export default Navbar;