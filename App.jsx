import DefaultTemplate from "./src/components/DefaultTemplate"
import RoutesMain from "./src/routes/RoutesMain"
import './styles/index.scss'
const App = () => {
  return (
    <>
      <DefaultTemplate>
        <RoutesMain />
      </DefaultTemplate>
    </>
  )
}

export default App
