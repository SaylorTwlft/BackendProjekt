import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getItems, reset } from "../features/items/itemSlice"

import ItemForm from '../components/ItemForm'
import Spinner from '../components/Spinner'
import ItemBox from "../components/ItemBox"

function Dashboard() {

  const nav = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { items, isLoading, isError, message } = useSelector((state) => state.items)



  useEffect(() => {

    if (isError) {
      console.log(message)
    }

    if (!user) {
      nav('/login')
    }

    dispatch(getItems())

    return () => {
      dispatch(reset())
    }
  }, [user, nav, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return <>
    <section className="heading">
      <h1>Witaj {user && user.name}!</h1>
      <p>Oto Twoja lista prezentów</p>
    </section>

    <ItemForm />

    <section className="content">
      {items.length > 0 ? (
        <div className="items">
          {items.map((item) => (
            <ItemBox key={item._id} item={item}></ItemBox>
          ))}
        </div>
      ) : (<h3>Lista jest pusta!</h3>)}
    </section >
  </>
}

export default Dashboard