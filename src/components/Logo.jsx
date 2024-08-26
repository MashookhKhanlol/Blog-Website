import React from 'react'
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { DiCssdeck } from 'react-icons/di';


const MyLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

function Logo({width = '100px'}) {
  return (
    <MyLogo href="/">
          <a
          style={{
              display : 'flex',
              alignItems : 'center',
              color : "white",
              marginBottom : "20;",
              cursor: 'pointer'  
          }}>
              <DiCssdeck size= '3rem' /> <Span>Vespera</Span>
        </a>
    </MyLogo>
  )
}

export default Logo