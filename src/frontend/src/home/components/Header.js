import React from 'react';
import {Container} from "react-bootstrap";
import styled from "styled-components";
import clip from '../assets/clip.mp4';
import SkillCard from "./SkillCard";
import springboot from '../assets/springBoot.png';
import reactjs from '../assets/reactjs.png';
import laravel from '../assets/laravel.png';
import mouse from '../assets/mouse.svg';

const Header = () => {
    return (
        <Container className='container header'>
            <Content>
                <Intro>
                    <pre>{'{'}</pre>
                    <pre className="code">
                        <span className="key">"name"</span>:<span className="value">"Emmanuel Akogwu"</span>,
                    </pre>
                    <pre className="code">
                        <span className="key">"keywords"</span>:<span className="value">"Software developer | Full Stack Developer"</span>,
                    </pre>
                    <pre className="code">
                        <span className="key">"Description"</span>:<span className="value">"I build Amazing Stuff for the Web."</span>,
                    </pre>
                    <pre className="code">
                        <span className="key">"git repository"</span>: <pre className="code">{'{'}</pre>
                        <pre className="code">
                           <span className="key">"url"</span>: <span className="value">"https://github.com/Akogwu."</span>,
                        </pre>
                        <pre className="code">{'}'}</pre>
                    </pre>
                    <pre>{'}'}</pre>
                </Intro>
                <Skills>
                    <SkillCard
                        src={springboot}
                        top={0} left={0}
                        right={null}
                        bottom={null}
                        color="#297904"
                        name="Spring boot"
                        percentage="90"
                    />
                    <SkillCard
                        src={reactjs}
                        top={250}
                        left={-100}
                        right={null}
                        bottom={null}
                        color="#00d8ff"
                        name="React js"
                        percentage="80"
                    />
                    <SkillCard
                        src={laravel}
                        top={450}
                        left={100}
                        right={null}
                        bottom={null}
                        color="#ff2d20"
                        name="Laravel"
                        percentage="95"
                    />
                    <ClipHolder>
                        <video autoPlay loop muted id='clip'>
                            <source src={clip} type='video/mp4'/>
                        </video>
                    </ClipHolder>

                </Skills>
            </Content>
            <img src={mouse} className='mouse' alt="Scroll down"/>
        </Container>
    );
};

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  padding: 1rem 0;
  position: relative;
  
  #indicator{
    position: absolute;
  }
`;

const Intro = styled.div`
    color: white; 
    font-size: 1.3rem;
    .code{
      margin-left: 1rem;
      .key{
        color: ${props => props.theme.secondaryColor};
      }
      .value{
        color: ${ props => props.theme.primaryColor };
      }
    }
`;

const Skills = styled.div`
  position: relative;
  background: rgb(17,22,43);
  background: radial-gradient(circle at 50% 50%,#2A3255, #11162b);
  
  padding: 1rem;
  border-radius: 50%;
  &:before{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background-color: rgba(17,22,43,0.3);
    height: 100%;
    width: 100%;
  }
`;

const ClipHolder = styled.div`
    height: 500px;
    width: 500px;
    border-radius: 50%;
    overflow: hidden;
    
  
  video{
    width: 100%;
    height: inherit;
    object-fit: cover;
   
  }
`;
export default Header;