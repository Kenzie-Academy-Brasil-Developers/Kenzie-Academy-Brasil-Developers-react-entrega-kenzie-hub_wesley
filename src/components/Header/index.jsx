import logo from '../../assets/Logo.png'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("@kenzie-gub")
        navigate("/")
    }
    return (
        <header className={styles.container_header}>
            <div>
                <img src={logo} alt="logo" />
                <button className='btn_logout' onClick={handleLogout}>Sair</button>
            </div>
        </header>
    )
}

export default Header