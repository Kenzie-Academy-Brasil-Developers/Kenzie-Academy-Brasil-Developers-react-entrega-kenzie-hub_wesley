import { createContext, useEffect, useState } from "react";
import api from "../services/api";

const TechsContexts = createContext({})

const TechsProvider = ({ children }) => {
    const [techsUser, setTechsUser] = useState(null)
    const [techsUserEdit, setTechsUserEdit] = useState(null)

    const [openModalCreate, setOpenModalCreate] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)


    //TODO: Cria método para abrir e fechar modal de edição
    //TODO: Criar função para editar o item selecionado
    // 

    const actionModal = (data) => {
        setOpenModalCreate(data)
    }


    const actionModalEdit = (data) => {
        setOpenModalEdit(data)
    }

    const createTech = async (dataTechs) => {
        try {
            const token = localStorage.getItem("@kenzie-hub")

            const { title, status } = dataTechs
            const newTechs = {
                title,
                status
            }

            const { data } = await api.post("/users/techs", newTechs, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechsUser([...techsUser], data)

        } catch (error) {
            console.log(error);
        }
    }

    const editTech = async (dataEdit, id) => {
        console.log(id);
        console.log(dataEdit);
        const token = localStorage.getItem("@kenzie-hub")
        try {
            await api.put(`/users/techs/${id}`, dataEdit, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const removeTechs = async (id) => {
        try {
            const token = localStorage.getItem("@kenzie-hub")
            await api.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        const token = localStorage.getItem("@kenzie-hub")
        const getList = async () => {
            const { data } = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechsUser(data.techs);
        }
        getList()
    }, [techsUser])

    return (
        <TechsContexts.Provider value={{ techsUser, setTechsUser, createTech, editTech, removeTechs, actionModal, openModalCreate, openModalEdit, actionModalEdit, techsUserEdit, setTechsUserEdit }}>
            {children}
        </TechsContexts.Provider>
    )
}

export { TechsContexts, TechsProvider }
