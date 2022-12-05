import React from "react";

import {ReactComponent as Power} from '../../../assets/power.svg';
import {ReactComponent as User} from '../../../assets/user.svg';
import {ReactComponent as GameController} from '../../../assets/game-controller.svg';
import {ReactComponent as Vibrate} from '../../../assets/vibrate.svg';
import {ReactComponent as Kid} from '../../../assets/kid.svg';

import '../../Global.css'
import './responsive.css'
import './style.css'

export default function footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="footer-item">
                    <Power className='svg'/>
                    <h3>Jogue também offline</h3>
                </div>
                <div className="footer-item">
                    <User className='svg'/>
                    <h3>67 jogadores</h3>
                </div>
                <div className="footer-item">
                    <GameController className='svg'/>
                    <h3>Compatível com uso remoto</h3>
                </div>
                <div className="footer-item">
                    <Vibrate className='svg'/>
                    <h3>Vibração no controle</h3>
                </div>
                <div className="footer-item">
                    <Kid className='svg'/>
                    <h3>Permitido para menores</h3>
                </div>
            </footer>
        </React.Fragment>
    )
}