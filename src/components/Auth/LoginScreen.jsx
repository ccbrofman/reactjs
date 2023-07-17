


import { useContext, useState } from 'react'
import './LoginScreen.css'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'

const LoginScreen = () => {
    const { login, googleLogin } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

    return (
        <div className='auth-container bg-light '>
            <div className='auth-modal bg-dark'>
                <h2 className='text-white'>Login</h2>
                <img src={logo} alt="logopectu" className="logo"/>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input 
                        value={values.email}
                        onChange={handleInputChange}
                        type='email' 
                        placeholder='Email'
                        className='form-control my-2'
                        name='email'
                    />
                    <input 
                        value={values.password}
                        onChange={handleInputChange}
                        type='password' 
                        placeholder='Contraseña'
                        className='form-control my-2'
                        name='password'
                    />
                    <div className='registro'>
                    <button className='btn btn-success mx-3 my-3' type='submit' onClick={handleSubmit}>Iniciar sesión</button>
                    <Link to="/register">Registro</Link>
                    </div>

                </form>
                <button className='btn btn-warning mx-5 p-2' onClick={googleLogin}>Iniciar sesión con Google</button>
            </div>
        </div>
    )
}

export default LoginScreen