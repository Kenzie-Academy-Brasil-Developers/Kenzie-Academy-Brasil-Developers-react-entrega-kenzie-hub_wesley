import { useContext, useState } from "react"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { UserContext } from '../../../providers/UserContext'

import Input from '../../Input'
import loginSchemaForm from './loginShemaForm'

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(loginSchemaForm)
    })

    const { userLogin } = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    const submit = (loginData) => {
        userLogin(loginData, setLoading, reset);
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