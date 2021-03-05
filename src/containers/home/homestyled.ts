import styled from 'styled-components';
import banner from "../../images/slider3.jpg";
import Slider from "react-slick";
import backfooter from "../../images/h1-background-2.jpg";
import video from "../../images/img-video.jpg";
import {
    Link
  } from "react-router-dom";

export const Banner = styled.section`
    background-image:url(${banner});
    background-position:center;
    background-size:cover;
    height:100vh;
    width:100%; 
    display:flex;
    justify-content:center;
    align-items:center;

    div{
        text-align:center;
        h4{
            z-index: 6;
            white-space: nowrap;
            font-size: 18px;
            line-height: 12px;
            font-weight: 400;
            color: rgb(255, 255, 255);
            letter-spacing: 0px;
            margin:0px 0px 10px;
        }
        h2{
            z-index: 7;
            white-space: normal;
            font-size: 60px;
            line-height: 60px;
            font-weight: 700;
            color: rgb(255, 255, 255);
            letter-spacing: 0px;
            text-transform:uppercase;
            max-width:600px;
            margin:0px;
        }
    }
    @media screen and (max-width:700px){
       div h2{
            z-index: 7;
            min-width: 311px;
            max-width: 311px;
            white-space: normal;
            font-size: 40px;
            line-height: 48px;
            font-weight: 700;
            color: rgb(255, 255, 255);
            letter-spacing: 0px;
            font-family: Roboto;
            text-transform: uppercase;
            visibility: inherit;
            transition: none 0s ease 0s;
            text-align: center;
            border-width: 0px;
            margin: 0px;
            padding: 0px;
            min-height: 148px;
            max-height: 148px;
            opacity: 1;
            transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            transform-origin: 50% 50% 0px;
       }
       
    }
`;

export const ColectionHome = styled.section`
    padding: 100px 10px;

    
`;

export const ColectionText = styled.div`
    h3{
        display: block;
        margin: 14px 0 5px;
        text-transform: uppercase;
        font-size: 40px;
        line-height: 1.125em;
        font-weight: 700;
    }
    p{
        font-size: 16px;
        line-height: 1.68em;
        font-weight: 400;
        color: #464646;
    }
`;

export const TitleHome = styled.h5`
    display: block;
        margin: 0 0 22px;
        text-transform: none;
        font-family: titillium web,sans-serif;
        font-weight: 400;
        position: relative;
        padding-left: 50px;
        font-size: 23px;
        line-height: 1.217em;
        &::before{
            content:"";
            width: 40px;
            height: 2px;
            background-color: #000;
            left: 0px;
            top: 50%;
            transform: translateY(-50%);
            position: absolute;
            vertical-align: middle;
        }
`;
export const ViewMore = styled(Link)`
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    margin: 0;
    line-height: 1em;
    letter-spacing: 0;
    display: inline-block;
    text-transform: uppercase;
    text-decoration:none;
    position:relative;
    color:#000;
    &::after{
        position: absolute;
        content: "";
        bottom: -5px;
        left: 0px;
        height: 1px;
        width: 20px;
        background-color: #000;
        transition:width .2s ease-in-out;
    }
    &:hover::after{
        width: 80px;
    }
`;

export const LogoSlider = styled(Slider)`
       background-color: #f7f6f6;
        overflow-x:hidden;
        height:250px;
        div{
            height:250px;
            outline:none;
            display:flex;
            justify-content:center;
            align-items:center;
            position: relative;
            img{
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
            }
            .img-logo-1{
                z-index:10;
            }
            .img-logo-2{
                z-index:-1;
                opacity:0;
            }
        }
`;

export const HomeNew = styled.section`
    padding:10px;
`;

export const HomeNewContainer = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    height:500px;
    overflow:hidden;
    
    &:hover .img-new-background{
        transform:scale(1.1);
    }
    .img-new-background{
        position:absolute;
        top:0;
        left:0;
        z-index:-1;
        height:100%;
        width:100%;
        transition:all .3s ease;
    }
    div button{
        font-size: 14px;
        padding: 18px 52px;
        font-weight: 700;
        cursor: pointer; 
        text-transform: uppercase;
        background-color:transparent;
        border:2px solid #fff;
        outline:none;
        position:absolute;
        bottom:10%;
        left:50%;
        transform:translate(-50%,-50%);
        color:#fff;
        transition:background .3s ease;
        &:hover{
            background-color:#fff;
            color:#000;
        }
    }
    @media screen and (max-width:500px){
        height:300px;
       
    }
`;
export const HomeProductsTitle = styled.div`
    max-width:700px;
    margin-bottom:50px;
    h1 {
        display: block;
        margin: 14px 0 5px;
        text-transform: uppercase;
        font-size: 60px;
        line-height: 1.05em;
        font-weight: 700;

    }
    h5 {
        color: #464646;
        margin: 20px 0;
        font-size: 18px;
        line-height: 1.61em;
        font-weight: 400;
        margin-bottom: 0;
    }
`;
export const VideoBack = styled.section`
    background-image:url(${video});
    background-size:cover;
    background-position:center topu;
    background-attachment:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    height:500px;
    background-repeat:no-repeat;
`;
export const Email = styled.section`
    background-color: #f7f6f6;
    display:flex;
    justify-content:center;
    align-items:center;
    height:300px;
    .email{
        text-align:center;
        width:50%;
        div{
            display:flex;
            span{
                margin-right:10px;
                font-size:30px;

            }
        }
        button{
            position: relative;
            display: inline-block;
            vertical-align: middle;
            width: auto;
            margin: 0;
            font-family: Roboto,sans-serif;
            line-height: 1em;
            letter-spacing: 0;
            text-transform: uppercase;
            outline: 0;
            box-sizing: border-box;
            font-size: 14px;
            padding: 18px 52px;
            font-weight: 700;
            border: 2px solid #000;
            cursor: pointer;
            border-radius: 0;
            color: #fff;
            background-color: #000;
            white-space: nowrap;
        }
    }
    input{
        padding-left: 25px;
        padding: 0 0 9px;
        color: #000;
        font-size: 17px;
        line-height: 20px;
        font-weight: 700;
        text-transform: uppercase;
        margin: 0 0 25px;
        background-color: transparent;
        border: 0 solid #000;
        border-bottom: 2px solid #000;
        border-radius: 0;
        outline: 0;
        box-sizing: border-box;width:100%;
        &::placeholder{
            color:#000;
        }
    }
`;

export const BlogHome = styled.section`
    padding:50px 0px;
`;
export const BackFooter = styled.div`
    background-image:url(${backfooter});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    width:100%;
    height:200px;
`;