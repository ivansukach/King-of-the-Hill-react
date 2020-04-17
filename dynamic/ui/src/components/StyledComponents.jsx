import styled, { createGlobalStyle } from 'styled-components';
import authBackground from './img/authBackground.jpg';
export const Submit = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
    &:hover {
    opacity: 1;
    }
`;
export const GlobalBodyStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    // background-color: white;
    background: url(${authBackground}) no-repeat center center;
    background-size: cover;
    min-height: 100vh;
`;
export const GlobalDocumentStyle = createGlobalStyle`
    html{
        height: 100%;
        overflow:  hidden;
    }
    a{
        color: dodgerblue;
    }
    hr {
        border: 1px solid #f1f1f1;
        margin-bottom: 25px;
    }
    input{
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: #f1f1f1;
        outline: none;
    }  
    * {
        box-sizing: border-box;
    }
`;

export const Prompt = styled.div`
    height: 150px;
    width: 100%;
    font-family: 'BancoDi', fantasy;
    font-size: 6vw;
    text-align: center;
    color: ${props => props.number=="1" ? "white" : "plum"};
    padding: 80px 0px 0px 0px;
`;
export const SlideShow = styled.div`
    position: relative;
    height: 25vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Start = styled.button`
    display: block;
    padding: 10px 30px;
    margin: 10px auto;
    position: relative;
    overflow: hidden;
    border: 2px solid #fe6637;
    border-radius: 8px;
    font-family: 'd_Charger', fantasy;
    font-size: 30px;
    color: #fe6637;
    transition: .2s ease-in-out;   
    &:hover {
       background: #fe6637;
       color: #fff;
    }
    &:before {
        content: "";
        background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));
        height: 50px;
        width: 50px;
        position: absolute;
        top: -8px;
        left: -75px;
        transform: skewX(-45deg);
    }
    &:hover:before {
        left: 80%;
        transition: .5s ease-in-out;
    }
`;
export const UserMenu = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height:8%;
    position:fixed;
    top:0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 2000;
    & > .flex-item {
      flex: auto;
    }
`;
export const Username = styled.p`
    color: blanchedalmond;
    margin:1%;
`;
export const UserPhoto = styled.img`
    height: 100%;
    border-radius:15%;
`;
export const Container = styled.div`
    padding: 16px;
    // background-color: ${props => props.wayToAlternativeForm ? "#f1f1f1" : "white"};
    text-align: ${props => props.wayToAlternativeForm ? "center" : "left"};
`;

export const BackgroundSound = styled.audio`
    padding-right: 10vw;
`;
export const Controls = styled.button`
    background: #333;
    color: #fff;
    border: none;
    padding: 20px;
    font-size: 20px;
    cursor: pointer;
    border: 2px solid #fff;
    margin: 10px;
    width: 70px;
    z-index: 1;
    &:hover, &:focus {
        background: #eee;
        color: #333;
    }
`;
export const Slides = styled.ul`
    position: relative;
    height: 25vw;
    margin: 0 auto;
    list-style-type: none;
`;
export const Slide = styled.li`
    position: ${props => props.number === props.currentSlide ? "relative" : "absolute"};
    //position: absolute;
    height: 100%;
    width: 20vw;
    left: 0px;
    top: 0px;
    opacity: ${props => props.number === props.currentSlide ? 1 : 0};
    z-index: ${props => props.number === props.currentSlide ? 1 : 0};
    transition: opacity 1s;
`;
export const UserMenuElement = styled.div`
    margin:1%;
`;
export const LinkToChangePhoto = styled.div`
    height: 100%;
    display: flex;
`;
export const Form = styled.form`
  background:
    linear-gradient(
    rgba(35,43,85,0.2),
    rgba(35,43,85,0.7));
  background-size: cover;
    width: 50vw;
    margin: 0vw 25vw;
  color: white;
`;
export const ModernCheckbox = styled.input`
    display: none;
    & + label {
        position: relative;
        padding-left: 85px;
        padding-top: 2px;
        cursor: pointer;
        margin-top: 8px;
    }
    & + label:before,
    & + label:after{
        content: '';
        position: absolute;
    }
    & + label:before {
        width: 65px;
        height: 30px;
        background: rgba(255,255,255,.2);
        border-radius: 15px;
        left: 0;
        top: -3px;
        transition: all .2s ease;
    }


    & + label:after {
        width: 10px;
        height: 10px;
        background: rgba(255,255,255,.7);
        border-radius: 50%;
        top: 7px;
        left: 10px;
        transition: all .2s ease;
    }

    &:checked + label:before {
        background: #0F4FE6;
    }

    &:checked + label:after {
        background: #ffffff;
        top: 7px;
        left: 45px;
    }
    
    & + label .ui,
    & + label .ui:before,
    & + label .ui:after {
        position: absolute;
        left: 6px;
        width: 65px;
        border-radius: 15px;
        font-size: 14px;
        font-weight: bold;
        line-height: 22px;
        transition: all .2s ease;
    }
    
    &:not(:checked) + label .ui:before {
        content: "no";
        left: 32px;
        color: rgba(255,255,255,.7);
    }

    &:checked + label .ui:after {
        content: "yes";
        color: #ffffff;
    }
`;
