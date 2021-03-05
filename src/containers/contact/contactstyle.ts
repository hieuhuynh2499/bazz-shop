import styled from 'styled-components';


export const ContactContainer = styled.section`
    padding:100px 10px;
`;

export const InputContact = styled.div`
    box-sizing:border-box;
    overflow:hidden;
    input{
    color:#000;
    position: relative;
    width: 100%;
    padding: 5px 0;
    font-family: Roboto,sans-serif;
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
    -webkit-appearance: none;
    cursor: text;
    box-sizing: border-box;
    -webkit-transition: border-color .2s ease-in-out;
    -moz-transition: border-color .2s ease-in-out;
    transition: border-color .2s ease-in-out;
    }
    textarea{
        padding-top: 14px;
        padding-left: 23px;
        margin-bottom: 8px;
        min-height: 120px!important;
        font-size: 16px;
        text-transform: capitalize;
        font-weight: 400;
        background: #f6f6f6;
        border: 0;
        width:100%;
        margin: 0 0 25px;
        color: #464646;
        border-radius: 0;
        outline:none;
    }
`;

export const BtnContact =styled.input`
    width: 100%;
    padding: 15px 0;
    position: relative;
    display: block;
    vertical-align: middle;
    margin: 0;
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
`;

export const ContactText = styled.div`
    h2{
        font-size: 36px;
        margin: 0 0 20px; 
        color: #000;
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
export const ContactTextBottom = styled.div`
    display:flex;
    @media screen and (max-width:800px){
        flex-direction:column;
       
    }
`;
export const ContactTextBottomItem = styled.div`
    margin-right:40px;
    h3{
        font-size: 23px;
    line-height: 1.217em;font-weight: 700;
    }
    ul{
      
        margin:0;
        padding:0;
    }
`;

export const ContactTextIcon = styled.li`
    list-style-type:none;
 
    margin:0 0 10px;
`;