import { useState } from 'react'

const ItemCount = () => {
    const[count, setCount] = useState(0)

    const resta = () => setCount ((count) => count - 1 )
    const suma = () => setCount ((count) => count + 1 )

    return(
        <div style={{display: 'flex'}}>
            <button onClick={resta}>-</button>
            <h1>{count}</h1>
            <button onClick={suma}>+</button>
        </div>

    )
}

export default ItemCount

