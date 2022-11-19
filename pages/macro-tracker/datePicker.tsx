export default function DatePicker({date, setDate} : {date: Date, setDate: Function}) {
    const increment = () => {
        date.setDate(date.getDate() + 1)
        setDate(date)
    }

    const decrement = () => {
        date.setDate(date.getDate() - 1)
        setDate(date)
    }

    return(
        <div className="mt-4 mx-4 flex justify-between">
            <button onClick={decrement} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 mr-2 rounded-full">&lt;</button>
            {date?.toDateString()}
            <button onClick={increment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 ml-2 rounded-full">&gt;</button>
        </div>
    )
}