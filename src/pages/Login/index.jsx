import Input from "../../components/Input"
import styles from './styles.module.scss'
import logo from '../../assets/Logo.png'

import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import api from "../../services/api"
import loginSchemaForm from "../../components/form/LoginForm/loginShemaForm"
import LoginForm from "../../components/form/LoginForm"

const LoginPage = ({ setUser, setModule }) => {




    return (
        <main className={`container`}>
            <section className={styles.container_section}>
                <img src={logo} alt="logo" />
                <div className={styles.container__form}>
                    <h1 className="title1">Login</h1>
                    <LoginForm setUser={setUser} setModule={setModule} />
                    <div className={styles.filed_register}>
                        <span className="headline">Ainda não possui uma conta?</span>
                        <button className="disabled"><Link className="removeLink" to="/register">Cadastre-se</Link></button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LoginPage