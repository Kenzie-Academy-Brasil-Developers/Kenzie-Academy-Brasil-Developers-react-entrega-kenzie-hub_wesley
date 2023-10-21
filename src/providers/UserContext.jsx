import { createContext, useEffect, useState } from "react"
import api from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';


const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const userLogout = () => {
        setUser(null)
        navigate("/")
        localStorage.removeItem("@kenzie-hub")
        toast.warn("Deslogado")
    }
    const userLogin = async (dataLogin, setLoading, reset) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions ", dataLogin);
            setUser(data.user)
            localStorage.setItem("@kenzie-hub", data.token)
            localStorage.setItem("@UserId", data.user.id)

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
        const userId = localStorage.getItem("@UserId")
        console.log(token);
        const getUser = async () => {
            try {
                const { data } = await api.get(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(data);
                setUser(data)

            } catch (error) {
                console.log("Este erro ", error);
            }
        }
        getUser()
    }, [])

    return (
        <UserContext.Provider value={{ user, userLogin, userLogout, createAccount }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }