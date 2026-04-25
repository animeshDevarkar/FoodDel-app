import React from 'react'
import './AppDownload.css'
import {assets} from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better experience, download the <span className='app-download-span'>FoodTomatoApp</span></p>
        <div className="app-download-platforms">
            <img src={assets.app_store} alt="App Store" />
            <img src={assets.play_store} alt="Play Store" />        
        </div>      
    </div>
  )
}

export default AppDownload;
