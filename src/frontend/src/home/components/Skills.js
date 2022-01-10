import React from 'react';
import {Container} from "react-bootstrap";
import styled from "styled-components";
import Progress from "./Progress";
import Tools from "./Tools";

const Skills = () => {
    return (
        <SkillsContainer>
            <Container>
                <Content>
                    <Experience>
                        <div className="title">
                            <h2>Experience</h2>
                        </div>

                        <div className="content">
                            <div className="year">
                                <h4>6+</h4>
                                <span>Years of <br/> experience</span>
                            </div>
                            <div className="projects">
                                <h4>100+</h4>
                                <span>completed <br/> projects </span>
                            </div>
                        </div>

                    </Experience>
                    <SkillsWrapper>
                        <div className="title">
                            <h2>My Skills</h2>
                        </div>
                        <div className="skills">
                            <ul>
                                <Progress
                                    stack='Spring boot'
                                    color="#297904"
                                    level="90"
                                />
                                <Progress
                                    stack='React js'
                                    color="#00d8ff"
                                    level="90"
                                />
                                <Progress
                                    stack='HTML 5'
                                    color="#E5828E"
                                    level="95"
                                />
                                <Progress
                                    stack='CSS 3'
                                    color="#EEA46E"
                                    level="97"
                                />
                                <Progress
                                    stack='Node js'
                                    color="#529d29"
                                    level="40"
                                />
                            </ul>
                        </div>
                    </SkillsWrapper>

                </Content>
                <Tools/>
            </Container>
        </SkillsContainer>

    );
};


const SkillsContainer = styled.div`
    padding-bottom: 3rem;
`;

const Content = styled.div`
    padding: 3rem 0;
    height: 70vh;
    display: flex;
`;

const Experience = styled.div`
    color: white;
    flex: 1;
  .title{
    position: relative;
    h2{
      font-size: 12rem;
      position: absolute;
      z-index: -1;
      opacity: .1;
    }
  }
  
  .content{
    display: flex;
    gap: 4rem;
    h4{
      color: ${props => props.theme.primaryColor};
      font-size: 3rem;
    }
    
    span{
      font-size: 1.5rem;
    }
  }
`;

const SkillsWrapper = styled.div`
    flex: 1;
    .title{
      color: ${props => props.theme.primaryColor};
      padding: 0.5rem 0;
    }
  
  .skills{
    color: white;
    
    ul{
      list-style-type: none;
      padding-left: 0;
      
      h3{
        font-weight: 200;
        font-size: 1rem;
      }
    }
   
  }
`;

export default Skills;