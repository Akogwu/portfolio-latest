import React from 'react';
import styled from "styled-components";

const SkillCard = ({src,top,left,right,bottom,color,name,percentage}) => {
    return (
        <Card top={top} left={left} right={right} bottom={bottom} color={color}>
            <Logo>
                <img src={src} alt="Spring boot"/>
            </Logo>
            <Content>
                <span className="title">{name}</span>
                <div className="progress" style={{ height: '6px'}}>
                    <div className={`progress-bar progress-bar-striped progress-bar-animated`} role="progressbar" style={{ width: `${percentage}%`,fontSize:'6px',backgroundColor:color }} aria-valuenow={percentage}
                         aria-valuemin="0" aria-valuemax="100">{percentage}%
                    </div>
                </div>
            </Content>
        </Card>
    );
};

const Card = styled.div`
    background-color: white;
    width: 200px;
    height: 80px;
    border-radius: 5px;
    position: absolute;
    top:  ${(props=> props.top !== 0)?props=> props.top+'px':0 };
    left: ${(props=> props.left !== 0)?props=> props.left+'px':0 };
    bottom: ${(props=> props.bottom !== null)?props=> props.bottom+'px':null };
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    overflow: hidden;
  
  &:before{
    content: "";
    height: 100%;
    width: 15%;
    left: -20px;
    border-radius: 50%;
    top: 0;
    position: absolute;
    background-color: ${props => props.color};
  }
`;

const Logo = styled.div`
    padding-left: 10px;
    img{
      width: 40px;
    }
    
`;

const Content = styled.div` 
    .title{
      font-size: 0.9rem;
      padding-bottom: 0.5rem;
      display: block;
    }
    
`;

export default SkillCard;