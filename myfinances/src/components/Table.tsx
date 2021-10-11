import styled from 'styled-components';
import { Item } from '../types/Item'
import TableItem from './TableItem';

type Props = {
    list: Item[]
}

const Table = ({ list }: Props) => {
    return (
        <Container>
            <thead>
                <tr>
                    <HeadColumn width={100}>Data</HeadColumn>
                    <HeadColumn>Titulo</HeadColumn>
                    <HeadColumn width={130}>Categoria</HeadColumn>
                    <HeadColumn width={150}>Valor</HeadColumn>
                </tr>
            </thead>

            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} />
                ))}
            </tbody>

        </Container>
    )
}

export const Container = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #eee;
    border-radius: 10px;
    margin-top: 20px;
`;

export const HeadColumn = styled.th<{ width?: number }>`
    padding: 10px 0;
    text-align: left;
    width: ${props => props.width ? `${props.width}px` : 'auto'};

`;

export default Table;