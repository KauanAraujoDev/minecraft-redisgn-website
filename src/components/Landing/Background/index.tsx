import React from 'react';
import wallpaper from '../../../assets/wallpaper.png';

import '../../Global.css'
import './style.css'
import './responsive.css'

export default function Background() {
  return (
    <React.Fragment>
        <div>
            <div className='wallpaper' style={{  background: `url(${wallpaper})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat, repeat' }}></div>
            <div className='gradientUp'></div>
            <div className='gradientDown'></div>
        </div>
    </React.Fragment>
  )
}
