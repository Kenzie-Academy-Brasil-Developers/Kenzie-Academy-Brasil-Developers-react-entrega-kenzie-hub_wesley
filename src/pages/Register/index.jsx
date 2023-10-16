import Input from "../../components/Input"
import styles from './styles.module.scss'
import logo from '../../assets/Logo.png'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchemaForm } from "./registerSchemaForm"
import api from "../../services/api"

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchemaForm)
    });

    const createAccount = async (dataForm) => {
        try {
            await api.post("/users", dataForm)
            alert("Conta criada com sucesso")
        } catch (error) {
            console.log(error);
        }
    }

    const submit = (dataRegister) => {
        createAccount(dataRegister);
        console.log(dataRegister);

    }
    return (
        <main className="container">
            <section className={styles.container_section}>
                <div className={styles.top_form}>
                    <img src={logo} alt="logo" />
                    <button type="submit">Voltar</button>
                </div>
                <div className={styles.container__form}>
                    <div>
                        <h1 className="title1">Crie sua conta</h1>
                        <span className="headline">Rapido e grátis, vamos nessa</span>
                    </div>
                    <form onSubmit={handleSubmit(submit)}>
                        <Input label="Nome" type="text" placeholder='Digite seu nome' dataForm={register("name")} error={errors.name} />


                        <Input label="Email" type="email" placeholder='Digite seu e-mail' dataForm={register("email")} error={errors.email} />

                        <Input label="Senha" type="password" placeholder='Digite sua senha' dataForm={register("password")} error={errors.password} />

                        <Input label="Confirmar senha" type="password" placeholder='Confirme sua senha' dataForm={register("confirmPassword")} error={errors.confirmPassword} />


                        <Input label="Bio" type="text" placeholder='Fale sobre você' dataForm={register("bio")} error={errors.bio} />

                        <Input label="Contato" type="text" placeholder='Opção de contato' dataForm={register("contact")} error={errors.contact} />

                        <div className={styles.selected_input} >
                            <label className="headline" htmlFor="modulo">Selecionar módulo</label>
                            <select  {...register("course_module")}>
                                <option value="primeiroModulo">Primeiro módulo (Introdução ao Frontend)</option>
                                <option value="segundoModulo">Segundo módulo (Frontend Avançado)</option>
                                <option value="terceiroModulo">Terceiro módulo (Introdução ao Backend)</option>
                                <option value="quartoModulo">Quarto módulo (Backend Avançado)</option>

                            </select>

                        </div>

                        <button className="button_negative" type="submit">Cadastrar</button>
                    </form>
                </div>
            </section>

        </main>
    )
}

export default RegisterPage