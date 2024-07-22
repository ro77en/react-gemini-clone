import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {

    const [isExtended, setExtended] = useState(false);

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="menu icon" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="plus icon" />
                {isExtended ? <p>New Chat</p> : null} 
            </div>
            {isExtended
            ?
            <div className="recent">
                <p className='recent-title'>Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="message icon" />
                    <p>What is React ...</p>
                </div>
            </div>
            :
            null
            }
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="question icon" />
                {isExtended ? <p>Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="history icon" />
                {isExtended ? <p>Activity</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="Setting icon" />
                {isExtended ? <p>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar