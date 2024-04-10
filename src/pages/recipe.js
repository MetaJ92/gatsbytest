import React from 'react';
import styled from 'styled-components';
import PrepTime from '../components/prepTime';
import Info from '../components/recipeInfo';
import Ing from '../components/Ingredients';
import { Link } from 'gatsby';
var back = "/recipeList/";
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

const pageTemplate = props => {
    const data = {
        nodeFood: props.pageContext.data
    }
    //console.log(data);
    //Food Summary 
    var sum = ""+data.nodeFood?.summary?.value;
    var summary = sum;
    summary = summary.replaceAll(/\/|<p>|<|p>/gi, "");
    //Ingreidents
    var ingwed = " "+data.nodeFood?.ingredients;
    var ingwed2 = ingwed;
    ingwed2 = ingwed2.replaceAll(/,/gi, "\n");
    //var ingwed2 = ingwed;
    //var kount = 1;
    //var stepz = 2;
    //Method that replaces characters in a string.
      String.prototype.replaceAt = function(str, index, replacement) {
        if(index > str.length-1) return str;
        return this.substring(0, index)+replacement+this.substring(index+replacement.length);
      }
    //Numerates Ingreidents string.substr(0, 2) + "     " + string.substr(2)
/*     while(true){
        if(kount > ingwed2.length-1){
            break;
        }
        else{
                if(ingwed2.charAt(kount) === ","){
                    if (kount <= 9){
                        //ingwed2 = ingwed2.substring(0,kount+1)+String(stepz)+" "+ingwed2.substring(kount+1,ingwed2.length);
                        ingwed2 = ingwed2.replaceAt(ingwed2,kount,"\n");
                        ///ingwed2 = ingwed2.replaceAt(ingwed2,kount+1,String(stepz));
                        //ingwed2=ingwed2.substring(0, kount+2)+" "+ingwed2.substring(kount+2)
                        ///ingwed2 = ingwed2.replaceAt(ingwed2,kount+2," ");
                        //ingwed2 = ingwed2.replaceAt(ingwed2,kount,"\n");
                    }else{
                        ingwed2 = ingwed2.replaceAt(ingwed2,kount,"\n");
                        ingwed2 = ingwed2.replaceAt(ingwed2,kount+1,String(stepz));
                        //ingwed2 = ingwed2.substring(0,kount+3)+" "+ingwed2.substring(kount+3,ingwed2.length);
                        //ingwed2 = ingwed2.replaceAt(ingwed2,kount+2,String(stepz).charAt(1));
                        //ingwed2 = ingwed2.replaceAt(ingwed2,kount+3," ");
                    }
                    stepz++;
                }
                kount++;
        }
    } */
    //ingwed2 = ingwed2.replaceAll(/,/gi, "\n");
    //Recipe Instructions
    var inst = ""+data.nodeFood?.recipeInstruction?.value;
    var inst2 = inst;
    //var num = inst2.indexOf("<li>", lastChar);//7 210 366 462 554 -1
    //Method that replaces characters in a string.
    /* String.prototype.replaceAt = function(str, index, replacement) {
      if(index > str.length-1) return str;
      return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    } */

    //Finds when to add numbers to steps.
    var times = 1;
    var count = 1;
    while(true){
        if(count > inst2.length-1){
            break;
        }
        else{
            if(inst2.charAt(count) === "<"){
                if(inst2.charAt(count+1) === "l"){
                    if (count <= 9){
                        inst2 = inst2.replaceAt(inst2,count-1,"\n");
                        inst2 = inst2.replaceAt(inst2,count,String(times));
                        inst2 = inst2.replaceAt(inst2,count+1," ");
                        inst2 = inst2.replaceAt(inst2,count+2,"");
                        inst2 = inst2.replaceAt(inst2,count+3,"");
                    }
                    else{
                        inst2 = inst2.replaceAt(inst2,count-1,"\n");
                        inst2 = inst2.replaceAt(inst2,count,String(times));
                        inst2 = inst2.replaceAt(inst2,count+1,String(times).charAt(1));
                        inst2 = inst2.replaceAt(inst2,count+2," ");
                        inst2 = inst2.replaceAt(inst2,count+3,"");
                        inst2 = inst2.replaceAt(inst2,count+4,"");
                    }
                    times++;
                }
            }
            count++;
        }
    }
    inst2 = inst2.replaceAll(/\/|<ol>|<li>|li>|ol>|i>|</gi, "");//Display instructions
    inst2 = inst2.replaceAll(/l >| >|<p|p>/gi, " ");//Cleans up spacing
    //Image String
    var pic = ""+data.nodeFood?.mediaImage?.mediaImage?.url;
    var knife ="https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/knife.svg";
    var timer = "https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/timer.svg";
    var plate = "https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/serves.svg";
    var difficult = "https://csc496f22demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/difficulty.svg";
    return (
        <>
            <Title style={{fontSize: "50px"}}>{data.nodeFood?.title}</Title>
            {/* <Info>Recipe category: <Link to={data.nodeFood?.path}>{data.nodeFood?.recipeCategory?.name}</Link></Info> */}
            {/* <Info>Tags: {data.nodeFood?.tags?.name}</Info> */}
            <Info><Link to={back}>Back to List</Link></Info>
            <Info>{summary}</Info>
            <Info><img src={pic} alt="Food"></img></Info>

            <PrepTime style={{textalign: "center"}}>
                <object data={knife} type="image/svg+xml" width="100" height="100" alt="Knife">Knife</object>
                <b>Preparation time: </b>{data.nodeFood?.preparationTime} minutes
            </PrepTime>
            <PrepTime>
                <object data={timer} type="image/svg+xml" width="100" height="100">Timer</object>
                <b>Cooking time: </b>{data.nodeFood?.cookingTime} minutes
            </PrepTime>
            <PrepTime>
                <object data={plate} type="image/svg+xml" width="100" height="100">Plate</object>
                <b>Number of servings: </b>{data.nodeFood?.numberOfServings}
            </PrepTime>
            <PrepTime>
                <object data={difficult} type="image/svg+xml" width="100" height="100">Difficulty</object>
                <b>Difficulty: </b>{data.nodeFood?.difficulty}
            </PrepTime>

            <Ing><b>Ingredients </b><pre>{ingwed2}</pre></Ing>

            <Ing><b>Recipe instruction </b><pre>{inst2}</pre></Ing>
        </>
    )}

export default pageTemplate