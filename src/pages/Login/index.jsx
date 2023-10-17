import styles from './styles.module.scss'
import logo from '../../assets/Logo.png'
import { useNavigate } from "react-router-dom"
import LoginForm from "../../components/form/LoginForm"

const LoginPage = ({ setUser, setModule }) => {
    const navigation = useNavigate()
    return (
        <main className={`container`}>
            <section className={styles.container_section}>
                <img src={logo} alt="logo" />
                <div className={styles.container__form}>
                    <h1 className="title1">Login</h1>
                    <LoginForm setUser={setUser} setModule={setModule} />
                    <div className={styles.filed_register}>
                        <span className="headline">Ainda não possui uma conta?</span>
                        <button className="disabled" onClick={() => navigation('/register')}>Cadastre-se</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LoginPage