export default function MacroItem({item, handleDeleteItem}: {item: MacroItem, handleDeleteItem: () => void}) {
    const deleteItem = () => {
        fetch(`/api/macros/${item._id}`, { method: 'DELETE' })
        .then(() => handleDeleteItem())
    }

    return(
        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
            <td className='py-4 px-6'>{item.food}</td>
            <td className='py-4 px-6'>{item.amount}</td>
            <td className='py-4 px-6'>{item.calories}</td>
            <td className='py-4 px-6'>{item.protein}</td>
            <td className='py-4 px-6'><button onClick={deleteItem} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Delete</button></td>
        </tr>
    )
}