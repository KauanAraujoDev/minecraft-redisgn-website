import React from 'react';

import {ReactComponent as Logo} from '../../../assets/logo.svg';

import '../../Global.css'
import './responsive.css'
import './style.css'

export default function header() {
  const alterScreen = (screen: string) => {
    console.log(screen)
  }

  return (
    <React.Fragment>
        <header>
          <div className='webName'>
              <Logo className='logo'/>
              <h2>MINE</h2>
          </div>
          <div className='navbar'>
            <div className='alterscreen' onClick={() => {alterScreen('join')}}><h3>ENTRAR</h3></div>
            <div className='alterscreen' onClick={() => {alterScreen('forum')}}><h3>FORUM</h3></div>
            <div className='alterscreen' onClick={() => {alterScreen('about')}}><h3>SOBRE</h3></div>
            <div className='alterscreen' onClick={() => {alterScreen('mojang')}}><h3>MOJANG</h3></div>
            <div className='alterscreen' onClick={() => {alterScreen('asks')}}><h3>PERGUNTAS</h3></div>
          </div>
        </header>
    </React.Fragment>
  )
}
