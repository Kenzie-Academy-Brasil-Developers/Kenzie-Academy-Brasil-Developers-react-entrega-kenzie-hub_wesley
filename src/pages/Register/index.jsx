import styles from './styles.module.scss'
import logo from '../../assets/Logo.png'
import RegisterForm from '../../components/form/RegisterForm'
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return (
        <main className={`container ${styles.container_main}`}>
            <section className={styles.container_section}>
                <div className={styles.top_form}>
                    <img src={logo} alt="logo" />
                    <button type="submit" ><Link to="/">Voltar</Link></button>
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