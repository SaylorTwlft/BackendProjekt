import { useState } from "react"
import { useDispatch } from "react-redux"
import { createItem } from '../features/items/itemSlice'

function ItemForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createItem({ text }))
        setText('')
    }

    return <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Prezent</label>
                <input type="text" name='text' id='text' value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">
                    Dodaj prezent
                </button>
            </div>
        </form>
    </section>
}

export default ItemForm