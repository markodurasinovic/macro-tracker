import MacroItem from './macroItem'

type MacroItem = {
    food: string;
    amount: number;
    calories: number;
    protein: number;
}

export default function MacroDisplay({items} : {items: Array<MacroItem>}) {
    const sum = (key: string) => {
        return items.reduce((acc, item) => acc + item[key as keyof typeof MacroItem], 0)
    }

    return(
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Amount</th>
                    <th>Calories</th>
                    <th>Protein</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => <MacroItem item={item} />)}
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td>{sum('calories')}</td>
                    <td>{sum('protein')}</td>
                </tr>
            </tbody>
        </table>
    )
}