import { createContext, useEffect, useState } from "react"
import api from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';


const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const navigate = useNavigate()


    const userLogout = () => {
        setUser(null)
        localStorage.removeItem("@kenzie-hub")
        toast.warn("Deslogado")
        navigate("/")
    }

    const userLogin = async (dataLogin, setLoading, reset) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions ", dataLogin);
            setUser(data.user)
            localStorage.setItem("@kenzie-hub", data.token)
            reset()
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

    const createAccount = async (dataForm, setLoading) => {
        try {
            setLoading(true)
            await api.post("/users", dataForm)
            toast.success('Cadastro Realizado com sucesso', {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            if (error.response.data.message === "Email already exists") {
                toast.error('Email já cadastrado. Por favor Utilize outro!', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@kenzie-hub")

        const getUser = async () => {
            try {
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                const { name, course_module } = data

                setUser({ name, course_module })

            } catch (error) {
                console.log("Este erro ", error);
            }
        }
        getUser()

        if (!token) {
            navigate('/')
        }
    }, [])
    return (
        <UserContext.Provider value={{ user, userLogin, userLogout, createAccount }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }