import React, { useState } from 'react'
import { Container, Body, Header } from './GlobalStyles'
import { Item } from './types/types'

import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {

	const [list, setList] = useState<Item[]>([
		{ id: 1, title: 'Comprar pão amanhã', done: false },
		{ id: 2, title: 'Estudar javascript amanhã', done: false },
		{ id: 3, title: 'Comprar carne do final de semana', done: true }
	])

	const handleAddItem = (task: string) => {
		let newList = [...list]
		newList.push({
			id: list.length + 1,
			title: task,
			done: false
		})

		setList(newList)
	}

	const handleChangeItem = (id: number, done: boolean) => {
		let newList = [...list];
		for (let i in newList) {
			if (newList[i].id === id) {
				newList[i].done = done;
			}
		}
		setList(newList);
	}

	return (
		<Container>
			<Body>
				<Header>Lista de Tarefas</Header>

				<AddItem handleAddItem={handleAddItem} />

				{list.map((item, index) =>
					<ListItem key={index}
						data={item}
						handleChangeItem={handleChangeItem}
					/>
				)}

			</Body>
		</Container>
	)
}

export default App