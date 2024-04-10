//import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components';
/*
font-weight: bold
color: #BF4F74;
*/
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
    font-size: 24px;
    text-align: center;
    `;

const PrepTime = ({children}) => (
    <>
   {/*  <div classname="block block-layout-builder block-field-blocknoderecipefield-number-of-servings">
  <div classname="field field--name-field-number-of-servings field--type-integer field--label-inline clearfix">
    <div classname="field__label">Number of servings</div>
              <div classname="field__item">8</div>
          </div>
  </div> */}

    <Time>
        {/* Preparation Time: */}
        {children}
    </Time>
    </>
)


export default PrepTime