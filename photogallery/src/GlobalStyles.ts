import styled from "styled-components"


export const Container = styled.div`
    background-color: #17181F;
    color: #797A81;
    min-height: 100vh;
`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0; 
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    text-align: center;
    padding-bottom: 30px;
`;

export const Loading = styled.div`
    text-align: center;

    .emoji {
        font-size: 40px;
        margin-bottom: 20px;
    }
`;

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const UploadForm = styled.form`
    background-color: #3d3f43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type=submit] {
        background-color: #756df4;
        color: #fff;
        border: 0;
        padding: 8px 16px;
        font-size: 18px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
`;