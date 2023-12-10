import { useDispatch } from "react-redux"
import { deleteItem } from "../features/items/itemSlice"

function ItemBox({ item }) {

    const dispatch = useDispatch()

    return (
        <div className="item">
            <div>
                {new Date(item.createdAt).toLocaleString('pl-PL')}
            </div>
            <h2>{item.text}</h2>
            <button onClick={() => dispatch(deleteItem(item._id))} className="close">X</button>
        </div>
    )
}

export default ItemBox