import { useState, KeyboardEvent } from 'react';
import { Container } from './styles';
import { Item } from '../../types/types'

type Props = {
    handleAddItem: (task: string) => void
}

const AddItem = ({ handleAddItem }: Props) => {

    const [text, setText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && text !== '') {
            handleAddItem(text)
            setText('')
        }
    }

    return (
        <Container>
            <div className='image'>➕</div>
            <input
                type='text'
                placeholder='Adicionar nova tarefa'
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </Container>
    )
}

export default AddItem;