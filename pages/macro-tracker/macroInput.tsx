import { useState } from 'react'


export default function MacroInput({date, handleAddItem} : {date: Date, handleAddItem: () => void}) {
    const [food, setFood] = useState('')
    const [amount, setAmount] = useState(0)
    const [calories, setCalories] = useState(0)
    const [protein, setProtein] = useState(0)

    const add = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const item: MacroItem = { food, amount, calories, protein, date };
        fetch('/api/macros', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
        .then(() => {
            handleAddItem()
            setFood('')
            setAmount(0)
            setCalories(0)
            setProtein(0)
        })
    }

    return(
        <form className='flex flex-col p-5'>
            <label htmlFor="food-input">Food:</label>
            <input id="food-input" className='rounded mb-2' type='text' value={food} onChange={(e) => setFood(e.target.value)} />

            <label htmlFor="amount-input">Amount:</label>
            <input id="amount-input" className='rounded mb-2' type='number' value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />

            <label htmlFor="calories-input">Calories:</label>
            <input id="calories-input" className='rounded mb-2' type='number' value={calories} onChange={(e) => setCalories(parseInt(e.target.value))} />

            <label htmlFor="protein-input">Protein:</label>
            <input id="protein-input" className='rounded mb-4' type='number' value={protein} onChange={(e) => setProtein(parseInt(e.target.value))} />
            
            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={add}>Add</button>
        </form>
    )
}