import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import api from '../../../services/api'
import Input from '../../Input'
import { registerSchemaForm } from './registerSchemaForm'
import { toast } from 'react-toastify';

const RegisterForm = ({ setUser, setModule }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchemaForm)
    });

    const createAccount = async (dataForm) => {
        try {
            await api.post("/users", dataForm)

            toast.success('Cadastro Realizado com sucesso', {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            if (error.response.data.message === "Email already exists") {
                alert('Já cadastrado')
                toast.success('Email já cadastrado. Por favor Utilize outro!', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            console.error(error);
        }
    }

    const submit = (dataRegister) => {
        createAccount(dataRegister);
        console.log(dataRegister);

    }

    return (
        <form className='form_register' onSubmit={handleSubmit(submit)}>
            <Input label="Nome" type="text" placeholder='Digite seu nome' dataForm={register("name")} error={errors.name} />


            <Input label="Email" type="email" placeholder='Digite seu e-mail' dataForm={register("email")} error={errors.email} />

            <Input label="Senha" type="password" placeholder='Digite sua senha' dataForm={register("password")} error={errors.password} />

            <Input label="Confirmar senha" type="password" placeholder='Confirme sua senha' dataForm={register("confirmPassword")} error={errors.confirmPassword} />


            <Input label="Bio" type="text" placeholder='Fale sobre você' dataForm={register("bio")} error={errors.bio} />

            <Input label="Contato" type="text" placeholder='Opção de contato' dataForm={register("contact")} error={errors.contact} />

            <div className='select_container'>
                <label className="headline" htmlFor="modulo">Selecionar módulo</label>
                <select  {...register("course_module")}>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>

                </select>

            </div>

            <button className="button_negative" type="submit">Cadastrar</button>
        </form>
    )
}

export default RegisterForm