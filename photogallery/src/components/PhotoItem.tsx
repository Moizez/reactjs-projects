import styled from 'styled-components';
import { Photo } from '../types/Photo'

type Props = {
    data: Photo
    onDelete: (name: string) => void
}

const PhotoItem = ({ data, onDelete }: Props) => {
    return (
        <Container>
            <img src={data.url} alt={data.name} />
            {data.name}
            <button onClick={() => onDelete(data.name)}>Excluir</button>
        </Container>
    )
}

const Container = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    button {
        display: block;
        background-color: #756DF4;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 10px auto 0 auto;
        cursor: pointer;
        &:hover {
            opacity: 0.9;
        }
    }
`;

export default PhotoItem