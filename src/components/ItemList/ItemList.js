import Item from "../Item/Item"
import './ItemList.css'
const ItemList = ({ products }) => {
    //listar

    //map transformando los productos en componentes Item
    return (
        <div className="lista">
            { products.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} price={prod.price}/>)}
        </div>
    )
}

export default ItemList
