import styled from "styled-components";
import search from "../../assets/images/search.gif";
export const BodyDiv = styled.div`
    margin: 30px 0;
    && div:nth-child(1){
        width: 120px;
        height: 120px;
        margin: 0 auto;
        background-image: url(${search});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    && p:nth-child(2){
        margin: 0;
        text-align: center;
        line-height: 2;
        font-size: 90%;
    }
`