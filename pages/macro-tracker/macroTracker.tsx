import { useState, useEffect } from 'react'

import DatePicker from './datePicker'
import MacroInput from './macroInput'
import MacroDisplay from './macroDisplay'


export default function MacroTracker() {
    const [items, setItems] = useState<MacroItem[]>([])
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        updateItems()
    }, [])

    const updateItems = () => {
        fetch('/api/macros/forDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date })
        })
        .then((res) => res.json())
        .then((data) => {
            setItems(data)
        })
    }

    const handleSetDate = (newDate: Date) => {
        setDate(newDate)
        updateItems()
    }

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mt-4">Macro Tracker</h1>
            <DatePicker date={date} setDate={handleSetDate} />
            <MacroInput date={date} handleAddItem={updateItems} />
            <MacroDisplay items={items} handleDeleteItem={updateItems} />
        </div>
    )
}