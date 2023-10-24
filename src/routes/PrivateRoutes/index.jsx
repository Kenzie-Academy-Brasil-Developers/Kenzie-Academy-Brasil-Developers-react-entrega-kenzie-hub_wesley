import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
    const { user } = useContext(UserContext)

    return (
        user ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes