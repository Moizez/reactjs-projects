import styled from 'styled-components';
import { Item } from '../types/Item'
import { formatDate } from '../helpers/dateFilter'
import { categories } from '../data/categories'

type Props = {
    item: Item
}

const TableItem = ({ item }: Props) => {
    return (
        <Container>
            <TableColumn>{formatDate(item.date)}</TableColumn>
            <TableColumn>{item.title}</TableColumn>
            <TableColumn>
                <Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </Category>
            </TableColumn>
            <TableColumn>
                <Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value.toFixed(2)}
                </Value>
            </TableColumn>
        </Container>
    )
}

export const Container = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background-color:${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
       color: ${props => props.color};
`;

export default TableItem;