import styled from 'styled-components';



export const CartContainer = styled.div`
    position:fixed;
    top:0px;
    right:0px;
    height:100vh;
    width :380px;
    background-color:#fff;
    box-sizing:border-box;
    padding:20px 20px 40px 40px;
    display:none;
    &.Close{
        display:block;
    }

`;
export const CloseX = styled.div`
    display:flex;
    justify-content:flex-end;
    height:80px;
    svg{
        font-size:20px;
    }
`;
export const CartContaienerBtn = styled.div`
    
`;
export const CartItemContainer = styled.div`
    overflow: auto;
    height:70vh;
    max-height:70vh;
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
        & span{
            cursor:pointer;
        }
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