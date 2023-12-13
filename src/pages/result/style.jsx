import styled from "styled-components";

export const BodyDiv = styled.div`
    && h1:nth-child(1){
        font-size: 130%;
        margin: 0;
        text-align: center;
        line-height: 2;
    }

    && section:nth-child(2){
        border: 2px solid navy;
        width: 90%;
        height: 280px;
        margin: 0 auto;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: scroll;
        
        div{
            width: 30%;
            height: 45%;
            border: 2px solid gray;
            box-sizing: border-box;
            p{
                margin: 0;
                white-space: nowrap;
                overflow: scroll;
            }

            p:nth-child(1){
                text-align: center;
                font-size: 110%;
                line-height: 2;
                text-decoration: underline;
            }
            p:nth-child(2){
                line-height: 2;
            }
            p:nth-child(3){
                text-align: center;
                line-height: 2;
            }
        }
    }

    && button:nth-child(3){
        background-color: #fff;
        border: 2px solid navy;
        border-radius: 10px;
        box-sizing: border-box;
        line-height: 2;
        font-size: 100%;
        font-family: sans-serif;
        display: block;
        margin: 0 auto;
        margin-top: 5%;
        width: 40%;
        font-weight: 600;
    }
`