import { useState, useEffect } from 'react'

import MacroInput from './macroInput'
import MacroDisplay from './macroDisplay'


export default function MacroTracker() {
    const [items, setItems] = useState<MacroItem[]>([])

    useEffect(() => {
        updateItems()
    }, [])

    const updateItems = () => {
        fetch('/api/macros')
            .then((res) => res.json())
            .then((data) => {
                setItems(data)
            })
    }

    return (
        <div>
            <h1 className="text-3xl">Macro Tacker</h1>
            <MacroInput items={items} handleAddItem={updateItems} />
            <MacroDisplay items={items} handleDeleteItem={updateItems} />
        </div>
    )
}