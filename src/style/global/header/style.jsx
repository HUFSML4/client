import styled from "styled-components";
import movie from "../../../assets/images/movie.png"
export const BodyDiv = styled.div`

    && h1:nth-child(1){
        margin: 0;
        font-size: 130%;
        font-family: sans-serif;
        font-weight: 500;
        text-align: center;
    }

    && p:nth-child(2){
        margin: 0;
        font-size: 100%;
        font-family: sans-serif;
        font-weight: 500;
        text-align: center;
    }
    && p:nth-child(2)::after {
        content: "";
        display: inline-block;
        width: 16px;
        height: 16px;
        background-image: url(${movie});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transform: translateY(2px);
        margin-left: 1%;
    }
    && p:nth-child(2) span{
        text-decoration: underline;
        color: navy;
    }
`