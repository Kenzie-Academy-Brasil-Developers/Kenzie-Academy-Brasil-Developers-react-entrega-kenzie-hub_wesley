import { useEffect } from 'react'
import Header from '../../components/Header'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
const HomePage = ({ user, module }) => {

    const navigate = useNavigate()
    const athentication = () => {
        const token = localStorage.getItem("@kenzie-hub");
        if (!token) {
            navigate("/")
        }
    }

    useEffect(() => { athentication() }, [])
    return (
        <>
            <Header />
            <main className="container">
                <div className={styles.main_info}>
                    <div className={styles.info_user}>
                        <div >
                            <h1 className='title1'>{`Olá eu sou ${user} `}</h1>
                            <h2 className='title1'>{module}</h2>
                        </div>
                    </div>
                    <div className={styles.section_info}>
                        <p className='paragraph'>Que pena! Estamos em desenvolvimento :(</p>
                        <span className='paragraph sm'>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
                    </div>
                </div>
            </main>
        </>
    )
}
export default HomePage

