import styled from "styled-components";

export const BodyDiv = styled.div`
    margin: 30px auto;
    width: 90%;

    && h1:nth-child(1){
        margin: 0;
        font-size: 100%;
        font-weight: 600;
        line-height: 1.5;
        span{
            color: navy;
        }
    }

    && p:nth-child(2){
        margin: 0;
        margin-bottom: 5%;

        input{
            width: 85%;
            padding: 0;
            font-size: 100%;
            border: 2px solid navy;
            box-sizing: border-box;
            border-radius: 10px;
            line-height: 2;
            padding-left: 3%;
        }
        button{
            width: 15%;
            padding: 0;
            font-size: 100%;
            line-height: 2;
            border-radius: 10px;
            background-color: #fff;
        }
    }

    && h1:nth-child(3){
        margin: 0;
        font-size: 100%;
        font-weight: 600;
        line-height: 1.5;
        span{
            color: navy;
        }
    }

    && section:nth-child(4){
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid navy;
        box-sizing: border-box;
        margin-bottom: 5%;
        p{
            margin: 0;
            text-align: center;
            font-size: 100%;
            font-weight: 500;
        }
    }

    && h1:nth-child(5){
        margin: 0;
        font-size: 100%;
        font-weight: 600;
        line-height: 1.5;
        span{
            color: navy;
        }
    }
    && button:nth-child(6){
        background-color: #fff;
        border: 2px solid navy;
        border-radius: 10px;
        box-sizing: border-box;
        line-height: 2;
        font-size: 100%;
        font-family: sans-serif;
        display: block;
        margin: 5% auto;
        width: 50%;
        font-weight: 600;
    }

`