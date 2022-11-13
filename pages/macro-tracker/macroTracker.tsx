import { useState, useEffect } from 'react'

import MacroInput from './macroInput'
import MacroDisplay from './macroDisplay'

type MacroItem = {
    food: string;
    amount: number;
    calories: number;
    protein: number;
}

export default function MacroTracker() {
    const [items, setItems] = useState<MacroItem[]>([])

    useEffect(() => {
        fetch('/api/macros')
            .then((res) => res.json())
            .then((data) => {
                setItems(data)
            })
    }, [])

    const addItem = (item: MacroItem) => {
        setItems(items => [...items, item])
    }

    return (
        <div>
            <h1 className="text-3xl">Macro Tacker</h1>
            <MacroInput items={items} addItem={addItem} />
            <MacroDisplay items={items} />
        </div>
    )
}