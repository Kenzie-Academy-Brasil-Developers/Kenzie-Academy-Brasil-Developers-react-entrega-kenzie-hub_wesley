import { useContext } from 'react'
import Header from '../../components/Header'
import styles from './styles.module.scss'

import { UserContext } from '../../providers/UserContext'
import CreateTechModal from '../../components/form/CreateTechModal/CreateTechModal'
import TechList from '../../components/TechList/TechList'
import { TechsContexts } from '../../providers/TechContext'
import EditTechModal from '../../components/form/EditTechModal/EditTechModal'

const HomePage = () => {
    const { user } = useContext(UserContext)
    const { openModalCreate, openModalEdit } = useContext(TechsContexts)

    return (
        <>
            <Header />
            <main className={`container ${styles.container_main}`}>
                <div className={styles.main_info}>
                    <div className={styles.info_user}>
                        <div >
                            <h1 className='title1'>{`Olá eu sou ${user.name}`}</h1>
                            <p className='paragraphSm'>{user.course_module}</p>
                        </div>
                    </div>
                    <div className={styles.section_info}>
                        {/* <p className='paragraph'>Que pena! Estamos em desenvolvimento :(</p>
                        <span className='paragraph sm'>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span> */}
                        <TechList />
                    </div>
                </div>
                {openModalCreate && (
                    <CreateTechModal />
                )}

                {openModalEdit && (
                    <EditTechModal />
                )}
            </main>
        </>
    )
}
export default HomePage

