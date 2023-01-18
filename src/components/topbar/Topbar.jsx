import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import avatar from '../../assets/VIKASH.jpeg';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topleft'>
                <span className="logo">AdminPanel</span>
            </div>
            <div className='topright'>
                <div className="topbarIcons">
                <NotificationsNoneIcon />
                    <span className="topbarBadges">2</span>
                </div>
                <div className="topbarIcons">
                <LanguageIcon />
                    <span className="topbarBadges">2</span>
                </div>
                <div className="topbarIcons">
                <SettingsIcon />
                </div>
                <img src={avatar} alt="" className='topbarAvatar' />
            </div>
        </div>
    </div>
  )
}

export default Topbar