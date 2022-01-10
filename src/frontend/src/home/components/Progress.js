import React from 'react';
import styled from "styled-components";

const Progress = ({ stack, level, color }) => {
    return (
        <Li>
            <h3>{stack}</h3>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width:`${level}%`, backgroundColor:color }} aria-valuenow={level} aria-valuemin="0" aria-valuemax="100"/>
                <span style={{ color: color, paddingLeft:0.6+'rem', fontWeight:500, fontSize:`9px`, lineHeight:`12px`}}>{level}%</span>
            </div>
        </Li>
    );
};


const Li = styled.li`
  padding: 1rem 0;
  
  .progress{
    border-radius: 0;
    height: 12px;
  }
`;

export default Progress;