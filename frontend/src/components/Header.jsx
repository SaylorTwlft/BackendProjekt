import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    if (!user) return
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  return (
    <header className='header'>
      <div className='logo'>
        {user ? (
          <Link to='/'>Twoja lista prezentów</Link>
        ) : (
          <Link to='/login'>Home</Link>
        )}
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Wyloguj
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Logowanie
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Rejestracja
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header