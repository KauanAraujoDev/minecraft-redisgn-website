import React, { useState } from 'react';
import styled from 'styled-components';

import {ReactComponent as Logo} from '../../../assets/logo.svg';

import '../../Global.css'
import './style.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPassword, setRememberPassword] = useState(false)

    const emailChange = (event: any) => {
        setEmail(event.target.value)
    }

    const passwordChange = (event: any) => {
        setPassword(event.target.value)
    }
    
    const getDataToUserFromDatabase = () => {
        if (password.length > 10 && email.length > 10) {
            window.alert(`E-mail: ${email}\nPassword: ${password}\nRemember: ${rememberPassword}`)
        } else {
            window.alert('Minimum number of characters is ten')
        }
    }

    const ButtonConfirmLogin = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        width: 23.5rem;
        height: 3rem;
        left: 2.2rem;
        top: 4rem;
        
        background: ${password.length > 10 && email.length > 10 ? 'linear-gradient(90.89deg, #22AE75 0%, #00874F 52.36%)' : 'rgba(255, 255, 255, 0.4)'};
        box-shadow: 0rem 0rem 0rem .5rem rgba(255, 255, 255, 0.05), 0rem .125rem 0rem #FFFFFF, inset 0rem .125rem 0rem rgba(255, 255, 255, 0.4);
        border-radius: .375rem;

        color: ${password.length > 10 && email.length > 10 ? '#FFFFFF' : '#C6C6C6'};
    `

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
                    <h3>Password</h3>
                    <input onChange={ passwordChange } type="password" placeholder='your password' required/>
                </div>
                <div className='login-remember-me' onClick={() => rememberPassword ? setRememberPassword(false) : setRememberPassword(true)}>
                    <input type="checkbox" id='rememberMeCheckBox'/>
                    <label htmlFor="rememberMeCheckBox" className='checkboxLabel'>Remember my password</label>
                </div>
                <ButtonConfirmLogin className='login-button-confirm' onClick={() => getDataToUserFromDatabase()}>
                    <h3>Login Account</h3>
                </ButtonConfirmLogin>
                <div className='login-forgot-password'>
                    <h5>Forgot password?</h5>
                </div>
            </div>
        </React.Fragment>
    )
}