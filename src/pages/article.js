import React from 'react';
import styled from 'styled-components';
import Info from '../components/recipeInfo';
import Ing from '../components/Ingredients';
import { Link } from 'gatsby';
var back = "/articleList/";

const Title = styled.h1`
    font-size 1.Sem;
    text-align: center;
    color: #BF4F74;

    box-sizing: inherit;
    margin-top: 0;

    margin: 0 0 1.07rem 0;
    font-family: "Scope One", Georgia, serif;
    font-size: 2rem;
    line-height: 1.2;

    font-weight: 400;
    `;

const articleTemplate = props => {
    const data = {
        nodeArt: props.pageContext.data
    } 
    //console.log(data);
    //author
    //var date = data.nodeArt.author?.created.substring(0, 10);//"2022-10-05T10:46:12-0700"
    var date = "5th October 2022";
    //Tags
    //MediaImage
    var pic = ""+data.nodeArt?.mediaImage?.mediaImage?.url;
    //body value
    var bod = ""+data.nodeArt?.body?.value;
    var bod2 = bod;
    //Fails build
    bod2 = bod2.replaceAll(/\/|<ol>|<li>|li>|ol>|i>|<|l >| >|<p|p>|blockquote>/gi, "");
    bod2 = bod2.replaceAll(/h2>|h3>|h4>/gi, "\n");
    return (
        <>
        <Title style={{fontSize: "50px"}}>{data.nodeArt?.title}</Title>
        
        <Info>by {data.nodeArt?.author?.displayName} • {date}</Info>
        <Info><Link to={back}>Back to List</Link></Info>

        <Info><img src={pic} alt="Food"></img></Info>

        <Ing><pre>{bod2}</pre></Ing>
        </>
    )}

    export default articleTemplate