import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/Login/'
import RegisterPage from '../pages/Register'
import HomePage from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import { useState } from 'react'

const RoutesMain = () => {
    const [user, setUser] = useState(null)
    const [module, setModule] = useState(null)

    return (
        <Routes>
            <Route path='/' element={<LoginPage setUser={setUser} setModule={setModule} />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<HomePage user={user} module={module} />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}
export default RoutesMain