import { useState } from 'react'
import './Counter.css'
const Counter = ({onAdd}) => {
    const [count, setCount] = useState (0)   
    
    const increment = () => {
        setCount (count+1)
    }
    
    const decrement = () => {
        if (count>=1){
        setCount (count-1)
        }
    }
     
    return (
        <div>
            <span className='cantidad'>{count}</span>
            
            <button className='buttons' onClick={decrement}>-</button>
            <button className='buttons' onClick={increment}>+</button>
           
            <button className='addCart' onClick={onAdd}>agregar al carrito</button>
        </div>
    )
}

export default Counter