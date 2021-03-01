import styled from 'styled-components';


export const ProductItem = styled.div`
    .product-img{
        overflow:hidden;
        background-color:#777;
        height:330px;
        position: relative;
        &:hover img{
            transform:scale(1.05);
        }
        img{
            height:100%;
            width:100%;
            transition:all 0.2s ease-in-out;
        }
        &:hover button{
            bottom:-15px;
        }
        button{
            position:absolute;
            bottom:-50px;
            left:50%;
            transform:translate(-50%,-50%);
            display: block;
            color: #fff;
            background-color: #000;
            line-height: 1;
            padding: 8px 10px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            outline:none;
            border:none;
            transition:all 0.3s ease-in-out;
            span{
                margin: 0 0 0 5px;
                position: relative;
                display: inline-block;
                vertical-align: middle; 
                text-align: center;
                left: -1px;
            }
        }
        
    }
    .product-content .product-content-title{
        margin-top:10px;
        display:flex;
        justify-content:space-between;
       
        h4{
            margin:0px;
            font-size: 17px;
            line-height: 1.235em;
            font-weight: 700;
            text-transform: uppercase;
        }
        p{
            margin:0px;
            span{
                color: #464646;
                font-size: 16px;
                font-weight: 400;
                line-height: 1.31em;
                text-transform: lowercase;
                position:relative;
                cursor: pointer;
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
            }
        }
    }
    .product-content .product-content-bottom{
        margin-top:5px;
        p {
            margin:0px;
        }
    }
`;