import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (

    `
    display: flex;
    background-color: #20212c;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    margin-top: 10px;

    input{
        height: 20px;
        width: 20px;
        margin-right: 5px;
    }

    label {
        color: ${done ? '#2a9d8f' : '#ccc'};
        text-decoration: ${done ? 'line-through' : 'initial'};
        margin-left: 5px;
    }`
));
