import React from 'react'
import styled from 'styled-components';

const Info = styled.p`
    text-align: center;
    font-size: 24px;
    `;

const RecipeInfo = ({children}) => (
    <Info>
        {children}
    </Info>
)

export default RecipeInfo
/*
const Time = styled.p`
    font-size 1.Sem;
    text-align: center;
    color: #BF4F74;
    `;

const cookTime = ({children}) => (
    <Time>
        Cooking Time:
        {children}
    </Time>
)


export default cookTime */