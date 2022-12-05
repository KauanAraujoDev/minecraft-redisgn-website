import React, { useState } from 'react'

import {ReactComponent as Logo} from '../../../assets/logo.svg';

import '../../Global.css'
import './style.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailChange = (event: any) => {
        setEmail(event.target.value)
    }

    const passwordChange = (event: any) => {
        setPassword(event.target.value)
    }

    const getDataToUserFromDatabase = () => {
        window.alert(`E-MAIL: ${email}\nPASSWORD: ${password}`)
    }

    return (
        <React.Fragment>
            <div className='login-board'>
                <div className='login-board-logo'>
                    <Logo className='login-logo'/>
                </div>
                <div className='login-input email'>
                    <h3>E-mail</h3>
                    <input onChange={ emailChange } type="email" placeholder='kauanaraujo.dev@gmail.com' required/>
                </div>
                <div className='login-input password'>
                    <h3>Senha</h3>
                    <input onChange={ passwordChange } type="password" placeholder='123456789' required/>
                </div>
                <div className='login-remember-me'>
                    <input type="checkbox" id='rememberMeCheckBox'/>
                    <label htmlFor="rememberMeCheckBox" className='checkboxLabel'>Lembrar minha senha</label>
                </div>
                <div className='login-button-confirm' onClick={() => { getDataToUserFromDatabase()} }>
                    <h3>Entrar na conta</h3>
                </div>
                <div className='login-forgot-password'>
                    <h5>Esqueceu a senha?</h5>
                </div>
            </div>
        </React.Fragment>
    )
}