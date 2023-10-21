import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/Login/'
import RegisterPage from '../pages/Register'
import HomePage from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'


const RoutesMain = () => {

    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<HomePage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}
export default RoutesMain