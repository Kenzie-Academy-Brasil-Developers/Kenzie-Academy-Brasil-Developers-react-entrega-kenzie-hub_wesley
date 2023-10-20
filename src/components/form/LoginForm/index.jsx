import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import api from '../../../services/api'
import loginSchemaForm from './loginShemaForm'
import Input from '../../Input'

const LoginForm = ({ setUser, setModule }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchemaForm)
    })

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();


    const userLogin = async (dataLogin) => {
        try {
            console.log(await api.post("/sessions ", dataLogin));
            const { data } = await api.post("/sessions ", dataLogin);
            localStorage.setItem("@kenzie-hub", data.token)
            console.log(data.user.name);
            setUser(data.user.name)
            setModule(data.user.course_module)
            navigate('/dashboard')

        } catch (error) {
            console.log(error);
            if (error.message?.data === "Incorrect password") {
                alert("Credenciais invalidas")
            }
        } finally {
            setLoading(false)
        }
    }

    const submit = (loginData) => {
        userLogin(loginData);
    }
    return (
        <form className='form_login' onSubmit={handleSubmit(submit)}>

            <div>
                <Input label="Email" type="email" placeholder='Digite seu e-mail' dataForm={register('email')} error={errors.email} />

                <Input label="Senha" type="password" placeholder='Digite sua senha' dataForm={register('password')} error={errors.password} />
            </div>
            <div className='sp_button'>
                <button type={"submit"}>Entrar</button>
            </div>
        </form>
    )
}

export default LoginForm