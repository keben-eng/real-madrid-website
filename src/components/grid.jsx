import { useState } from "react";

let arr = [
    { id: 1, count: 12 },
    { id: 2, count: 12 },
    { id: 3, count: 12 },
    { id: 4, count: 12 },
    { id: 5, count: 12 },
];

function Grid() {
    const [squares, setSquares] = useState(arr);

    const handleClick = (id) => {
        const updatedSquares = squares.map((item) => {
            if (item.id === id) {
                return { ...item, count: 0 };
            } else {
                return item;
            }
        });
        setSquares(updatedSquares);
    };

    return (
        <div>
            {squares.map((item) => (
                <div className='square' key={item.id} onClick={() => handleClick(item.id)}>
                    {item.count}
                </div>
            ))}
        </div>
    );
}

export default Grid;
