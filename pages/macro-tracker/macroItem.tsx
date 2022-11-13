type MacroItem = {
    food: string;
    amount: number;
    calories: number;
    protein: number;
}

export default function MacroItem({item}: {item: MacroItem}) {
    return(
        <tr>
            <td>{item.food}</td>
            <td>{item.amount}</td>
            <td>{item.calories}</td>
            <td>{item.protein}</td>
        </tr>
    )
}