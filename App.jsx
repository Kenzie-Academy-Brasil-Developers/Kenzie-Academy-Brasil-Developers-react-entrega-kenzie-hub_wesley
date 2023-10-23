import { ToastContainer } from "react-toastify";
import DefaultTemplate from "./src/components/DefaultTemplate"
import RoutesMain from "./src/routes/RoutesMain"
import './styles/index.scss'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <>
      <DefaultTemplate>
        <RoutesMain />
        <ToastContainer position="top-right" autoClose={2 * 1000} />
      </DefaultTemplate>
    </>
  )
}

export default App
