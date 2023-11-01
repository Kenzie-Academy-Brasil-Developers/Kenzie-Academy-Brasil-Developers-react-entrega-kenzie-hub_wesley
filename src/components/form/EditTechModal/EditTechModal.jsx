import { useContext, useEffect, useState } from 'react'
import Input from '../../Input'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { techSchemaForm } from './techSchemaForm'
import { TechsContexts } from '../../../providers/TechContext'

function EditTechModal() {
    const [loading, setLoading] = useState(false)
    const { actionModalEdit, editTech, techsUserEdit } = useContext(TechsContexts)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            title: techsUserEdit.title,
            status: techsUserEdit.status
        },
        resolver: zodResolver(techSchemaForm)
    })

    const handleCloseEdit = () => {
        actionModalEdit(false)
    }

    const submit = (dataForm) => {
        console.log(dataForm);
        editTech(dataForm, techsUserEdit.id)
    }


    useEffect(() => {

    }, [])
    return (
        <div className={`container ${styles.modal_tech}`}>
            <div className={styles.modal_form}>
                <div className={styles.header_modal}>
                    <h3>Editar Tecnologia</h3>
                    <button onClick={handleCloseEdit}>X</button>
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

export default EditTechModal