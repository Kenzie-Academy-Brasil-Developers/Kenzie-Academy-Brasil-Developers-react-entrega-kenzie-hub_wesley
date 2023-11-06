import styles from './styles.module.scss'
import logo from '../../assets/Logo.png'
import { useNavigate } from "react-router-dom"
import LoginForm from "../../components/form/LoginForm"

const LoginPage = () => {
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate("/register")
    }
    return (
        <main className={`container`}>
            <section className={styles.container_section}>
                <img src={logo} alt="logo" />
                <div className={styles.container_form}>
                    <h1 className="title1">Login</h1>
                    <LoginForm />
                    <div className={styles.filed_register}>
                        <span className="headline">Ainda não possui uma conta?</span>
                        <button className="disabled" onClick={handleRegister}>Cadastre-se</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LoginPage