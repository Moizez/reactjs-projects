import { useState, useEffect } from 'react';
import { Item } from './types/Item';
import { items } from './data/items';
import { categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import Table from './components/Table';
import Info from './components/Info';
import InputItem from './components/InoutItem';

import { Body, Container, Header, HeaderText } from './GlobalStyles';

const App = () => {

	const [list, setList] = useState(items)
	const [filteredList, setFilteredList] = useState<Item[]>([])
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth)
	const [income, setIncome] = useState(0)
	const [expense, setExpense] = useState(0)


	useEffect(() => {
		setFilteredList(filterListByMonth(list, currentMonth))
	}, [list, currentMonth])

	useEffect(() => {
		let incomeCount = 0
		let expenseCount = 0

		for (let i in filteredList) {
			if (categories[filteredList[i].category].expense) {
				expenseCount += filteredList[i].value
			} else {
				incomeCount += filteredList[i].value
			}
		}

		setIncome(incomeCount)
		setExpense(expenseCount)

	}, [filteredList])

	const onMonthChange = (newMonth: string) => {
		setCurrentMonth(newMonth)
	}

	const handleAddItem = (item: Item) => {
		let newList = [...list]
		newList.push(item)
		setList(newList)
	}

	return (
		<Container>
			<Header>
				<HeaderText>Sistema Financeiro</HeaderText>
			</Header>

			<Body>

				<Info
					currentMonth={currentMonth}
					onMonthChange={onMonthChange}
					income={income}
					expense={expense}
				/>

				<InputItem onAdd={handleAddItem} />

				<Table list={filteredList} />
			</Body>

		</Container>
	)
}

export default App