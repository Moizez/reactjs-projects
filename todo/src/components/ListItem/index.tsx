import { useState } from 'react';
import { Container } from './styles';
import { Item } from '../../types/types'

type Props = {
    data: Item;
    handleChangeItem: (id: number, done: boolean) => void
}

const ListItem = ({ data, handleChangeItem }: Props) => {

    return (
        <Container done={data.done}>
            <input
                type='checkbox'
                checked={data.done}
                onChange={e => handleChangeItem(data.id, e.target.checked)}
            />
            <label>{data.title}</label>
        </Container>
    )
}

export default ListItem;