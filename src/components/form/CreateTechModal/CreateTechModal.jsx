import { useContext, useEffect, useState } from 'react'
import Input from '../../Input'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { techSchemaForm } from './techSchemaForm'
import { TechsContexts } from '../../../providers/TechContext'

function CreateTechModal() {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(techSchemaForm)
    })

    const { actionModal, createTech } = useContext(TechsContexts)

    const handleCloseModal = () => {
        actionModal(false)
    }

    const submit = (dataForm) => {
        createTech(dataForm)
    }

    useEffect(() => {

    }, [])
    return (
        <div className={`container ${styles.modal_tech}`}>
            <div className={styles.modal_form}>
                <div className={styles.header_modal}>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={handleCloseModal}>X</button>
                </div>
                <form onSubmit={handleSubmit(submit)} >
                    <Input label="Nome" type="text" placeholder="Digite o a tecnologia" dataForm={register('title')} error={errors.title} />
                    <div className={styles.select_container}>
                        <label htmlFor="status">Selecionar Status</label>
                        <select {...register("status")} >
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>

                    <div className={styles.button_tech}>
                        <button type={"submit"}>Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTechModal