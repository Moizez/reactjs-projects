import { Item } from "../types/Item"

export const getCurrentMonth = () => {
    const now = new Date()
    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {

    let newList: Item[] = []
    const [year, month] = date.split('-')

    for (const i in list) {
        if (list[i].date.getFullYear() === parseInt(year) && (list[i].date.getMonth() + 1) === parseInt(month)) {
            newList.push(list[i])
        }
    }

    return newList
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear()
    let month = addZeroToDate(date.getMonth() + 1)
    let day = addZeroToDate(date.getDate())

    return `${day}/${month}/${year}`
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`

export const formatCurrentMonth = (currentMonth: string): string => {
    const [year, month] = currentMonth.split('-')
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return `${months[parseInt(month) - 1]} de ${year}`
}