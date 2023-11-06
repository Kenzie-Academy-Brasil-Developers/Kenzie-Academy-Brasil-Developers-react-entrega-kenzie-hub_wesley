import styles from './styles.module.scss'
import logo from '../../assets/Logo.png'
import RegisterForm from '../../components/form/RegisterForm'
import { useNavigate } from "react-router-dom"


const RegisterPage = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate("/")
    }
    return (
        <main className={`container ${styles.container_main}`}>
            <section className={styles.container_section}>
                <div className={styles.top_form}>
                    <img src={logo} alt="logo" />
                    <button type="submit" onClick={handleLogin}>Voltar</button>
                </div>
                <div className={styles.container__form}>
                    <div>
                        <h1 className="title1">Crie sua conta</h1>
                        <span className="headline">Rapido e grátis, vamos nessa</span>
                    </div>
                    <RegisterForm />
                </div>
            </section>
        </main>
    )
}

export default RegisterPage