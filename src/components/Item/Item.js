import './Item.css'
import Counter from '../Counter/Counter'
const Item = ({ img, name, category, price }) => {
    return (
        <div>
            <img src={img} alt={name} style={{ width: 100}}/>
            <h3>{name}</h3>
            <p>{price}</p>
            <Counter />
        </div>
    )
}

export default Item