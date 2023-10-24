import { ToastContainer } from "react-toastify";
import DefaultTemplate from "./src/components/DefaultTemplate"
import RoutesMain from "./src/routes/RoutesMain"
import './styles/index.scss'
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { UserContext } from "./src/providers/UserContext";

const App = () => {
  const { loading } = useContext(UserContext)

  return (
    <>
      <DefaultTemplate>
        {loading ? <div style={{ color: "#fff" }}>Carregando...</div> : <RoutesMain />}
        <ToastContainer position="top-right" autoClose={2 * 1000} />
      </DefaultTemplate>
    </>
  )
}

export default App
