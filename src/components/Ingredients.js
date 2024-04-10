import React from 'react'
import styled from 'styled-components';
const Time = styled.p`
    min-height: 40px;
    margin-bottom: 0.96em;
    padding-left: 48px;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 40px 40px;

    background: #fbf5ee;
    font-family: "Open Sans", Verdana, sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    
    display: table;

    Background: papayawhip;
    `;

const Ing = ({children}) => (
    <>
    <Time>
        {children}
    </Time>
    </>
)

export default Ing