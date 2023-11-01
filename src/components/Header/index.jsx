import { useContext } from 'react'
import logo from '../../assets/Logo.png'
import styles from './styles.module.scss'
import { UserContext } from '../../providers/UserContext'

const Header = () => {
    const { userLogout } = useContext(UserContext)

    const handleLogout = () => {
        userLogout()
    }

    return (
        <header className={`container ${styles.container_header}`}>
            <div>
                <img src={logo} alt="logo" />
                <button className='btn_logout' onClick={handleLogout}>Sair</button>
            </div>
        </header>
    )
}

export default Header