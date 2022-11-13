import { useState } from 'react'

type MacroItem = {
    food: string;
    amount: number;
    calories: number;
    protein: number;
}

export default function MacroInput({items, addItem} : {items: Array<Object>, addItem: (item: MacroItem) => void}) {
    const [food, setFood] = useState('')
    const [amount, setAmount] = useState(0)
    const [calories, setCalories] = useState(0)
    const [protein, setProtein] = useState(0)

    const add = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const item: MacroItem = { food, amount, calories, protein };
        addItem(item)
        fetch('/api/macros', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
    }

    return(
        <form>
            <input type="text" placeholder="Food" onChange={(e) => setFood(e.target.value)} />
            <input type="number" placeholder="Amount" onChange={(e) => setAmount(parseInt(e.target.value))} />
            <input type="number" placeholder="Calories" onChange={(e) => setCalories(parseInt(e.target.value))} />
            <input type="number" placeholder="Protein" onChange={(e) => setProtein(parseInt(e.target.value))} />
            <button onClick={add}>Add</button>
        </form>
    )
}