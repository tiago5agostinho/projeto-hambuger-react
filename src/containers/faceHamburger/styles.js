import React from "react";
import styled from "styled-components"

export const Container = styled.div`

height: 100%;
min-height:100vh  ;
background: #0A0A10;
display: flex;
flex-direction: column;
align-items: center;



`

export const ImgFace = styled.img`

width: 342px;
height: 354px;

margin-top: 10px
`



export const ContainerItens = styled.div`

    display: flex;
    flex-direction: column;
`

export const InputLabel = styled.p`

font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #EEEEEE;

margin-left: 20px;

`
export const Input = styled.input`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;


margin-bottom: 65px;
border:none;
padding-left: 15px;

`
