import React from 'react'
import "./Header.css"
import { Avatar, IconButton } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
    
        <div className='header__left'>
        <IconButton>
        <span className="material-icons-outlined">menu</span>
        </IconButton>

        <img src="./images/gmail.png" alt=''/>

        </div>

        <div className='header__middle'>
        <span className="material-icons-outlined">search</span>
        <input placeholder='search-mail' type='text'/>
        <span className="material-icons-outlined header__inputCaret">arrow_drop_down</span>
        </div>

        <div className='header__right'>
        <IconButton>
        <span class="material-icons-outlined">apps</span>
        </IconButton>

        <IconButton>
        <span class="material-icons-outlined">notifications</span>
        </IconButton>

        <Avatar/>

        </div>

    </div>
  )
}

export default Header