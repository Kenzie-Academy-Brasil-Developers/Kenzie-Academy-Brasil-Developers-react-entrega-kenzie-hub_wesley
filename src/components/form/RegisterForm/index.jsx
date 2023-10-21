import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useState } from "react"
import Input from '../../Input'

import { registerSchemaForm } from './registerSchemaForm'
import { UserContext } from '../../../providers/UserContext'

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchemaForm)
    });

    const [loading, setLoading] = useState(false)
    const { createAccount } = useContext(UserContext)

    const submit = (dataRegister) => {
        createAccount(dataRegister, setLoading);
        console.log(dataRegister);

    }

    return (
        <form className="form_register" onSubmit={handleSubmit(submit)}>
            <div>
                <Input label="Nome" type="text" placeholder='Digite seu nome' dataForm={register("name")} error={errors.name} />


                <Input label="Email" type="email" placeholder='Digite seu e-mail' dataForm={register("email")} error={errors.email} />

                <Input label="Senha" type="password" placeholder='Digite sua senha' dataForm={register("password")} error={errors.password} />

                <Input label="Confirmar senha" type="password" placeholder='Confirme sua senha' dataForm={register("confirmPassword")} error={errors.confirmPassword} />


                <Input label="Bio" type="text" placeholder='Fale sobre você' dataForm={register("bio")} error={errors.bio} />

                <Input label="Contato" type="text" placeholder='Opção de contato' dataForm={register("contact")} error={errors.contact} />
                <div >
                    <label className="headline" htmlFor="modulo">Selecionar módulo</label>
                    <select  {...register("course_module")}>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                    </select>
                </div>

            </div>

            <div className='sp_button'>
                <button className="button_negative" type="submit">Cadastrar</button>
            </div>
        </form>
    )
}

export default RegisterForm