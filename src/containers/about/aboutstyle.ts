import styled from 'styled-components';
import aboutImg from "../../images/about-title-img.jpg"

export const TitleAbout = styled.section`
    background-image:url(${aboutImg});
    background-size:cover;
    background-position:center;
    height:500px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    h1{
        color: #ffffff;
        font-size: 60px;
        line-height: 1.05em;
        text-transform: uppercase;
        font-weight: 700;
    }
`;
