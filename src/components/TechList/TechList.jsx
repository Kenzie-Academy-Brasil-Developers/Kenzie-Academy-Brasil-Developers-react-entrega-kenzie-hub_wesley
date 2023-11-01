import { useContext } from 'react'
import TechCard from './TechCard/TechCard'
import styles from './styles.module.scss'
import { TechsContexts } from '../../providers/TechContext'
const TechList = () => {
    const { actionModal, techsUser, removeTechs, techsUserEdit, setTechsUserEdit } = useContext(TechsContexts)
    const handleModal = () => {
        actionModal(true)
    }
    const handleRemove = (id) => {
        removeTechs(id)
    }

    const handleEdit = (id, item) => {
        setTechsUserEdit(item)

    }

    return (
        <div className={styles.container_list} >
            <div className={styles.header_list}>
                <h3>Tecnologias Header</h3>
                <button onClick={handleModal} className={styles.button_hd_list}>+</button>
            </div>
            <ul>
                {techsUser.map((item) => {
                    return (
                        <li key={item.id}>
                            <TechCard cardTech={techsUser} tecnologie={item.title} status={item.status} removeItem={() => handleRemove(item.id)} editItem={() => handleEdit(item.id, item)} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TechList