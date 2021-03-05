import styled from 'styled-components';

interface ShowCartContainer {
    display:string
}

export const CartContainer = styled.div`
    position:absolute;
    top:62px;
    right:20px;
    height:400px;
    width :300px;
    background-color:#fff;
    box-sizing:border-box;
    padding:10px;
    display:${(props:ShowCartContainer) => props.display};
`;

export const CartItemContainer = styled.div`
    height:280px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 5px;
        }
    &::-webkit-scrollbar-thumb {
        background: #777; 
    }
    margin-bottom:10px;
`;

export const CartItem = styled.div`
    margin:10px 0px;
    display:flex;
`;

export const CartItemImg = styled.div`
    img{
        height:80px;
        width:80px;
    }

`;

export const CartItemcontent = styled.div`
    padding:15px;
    
    flex-grow:1;
    position:relative;
    h4{
        margin:0px;
        font-size: 17px;
        line-height: 1.235em;
        font-weight:700;
        text-transform:uppercase;
    }
    span{
        font-size: 14px;
        line-height: 1.57em;
        color: #464646;
        font-weight:400;
    }
    strong{
        position:absolute;
        top:30px;
        right:20px;
        cursor:pointer;
    }
    p{
        display:inline-flex;
        flex-direction:column-reverse;
        position:absolute;
        top:0px;
        left:75px;
    }
`;

export const CartTotal = styled.div`
    display:flex;
    justify-content:space-between;
`;

export const CartBtn = styled.div`
margin-top:10px;
    display:flex;
    justify-content:space-between;
    .viewblack{
    display: inline-block;
    width: 49%;
    vertical-align: middle;
    height: 45px;
    line-height: 41px;
    padding: 0 26px;
    font-family: Roboto,sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    background-color: #000;
    border: 2px solid transparent;
    text-align: center;
    box-sizing: border-box;
    }
    .viewborder{
        background-color: #fff;
        color: #000;
        border-color: #000;
        display: inline-block;
    width: 49%;
    vertical-align: middle;
    height: 45px;
    line-height: 41px;
    padding: 0 26px;
    font-family: Roboto,sans-serif;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    box-sizing: border-box;
    }
`;