import MacroItem from './macroItem'

export default function MacroDisplay({items, handleDeleteItem} : {items: Array<MacroItem>, handleDeleteItem: () => void}) {
    const sum = (key: string) => {
        return items.reduce((acc, item) => acc + item[key as keyof typeof MacroItem], 0)
    }

    return(
        <div className='overflow-x-auto relative'>
            <table className='w-full text-sm text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className='py-3 px-6'></th>
                        <th scope='col' className='py-3 px-6'>Amount</th>
                        <th scope='col' className='py-3 px-6'>Calories</th>
                        <th scope='col' className='py-3 px-6'>Protein</th>
                        <th scope='col' className='py-3 px-6'></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => <MacroItem item={item} handleDeleteItem={handleDeleteItem} key={index} />)}
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                        <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>Total</th>
                        <td className='py-4 px-6'></td>
                        <td className='py-4 px-6'>{sum('calories')}</td>
                        <td className='py-4 px-6'>{sum('protein')}</td>
                        <td className='py-4 px-6'></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}