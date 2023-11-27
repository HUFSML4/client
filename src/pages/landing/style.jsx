import styled from "styled-components";
import movie from "../../assets/images/movie.jpg";
export const BodyDiv = styled.div`
    margin: 0 auto;
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
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid navy;
        box-sizing: border-box;
        margin-bottom: 5%;
        overflow: scroll;
        /* How to make background img tranparent */
        position: relative;

        &::before{
            content: "";
            background-image: url(${movie});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            position: absolute;
            opacity: 0.15;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            /* 배경화면 튀어나오기 방지 */
            pointer-events: none;
        }
        p{
            margin: 0;
            text-align: center;
            font-size: 100%;
            font-weight: 500;
            z-index: 1;
        }
        h3{
            z-index: 1;
            margin: 0;
            line-height: 2;
            text-align: center;
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
        margin: 0 auto;
        margin-top: 5%;
        width: 50%;
        font-weight: 600;
    }
    .selected{
        color: green;
    }
`