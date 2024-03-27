import React from 'react'
import "./Header.css"
import { Avatar, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice ';
import { auth } from './firebase';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut=()=>{
    auth.signOut().then(()=>{
      dispatch(logout())
    })
  }

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
        <span className="material-icons-outlined">apps</span>
        </IconButton>

        <IconButton>
        <span className="material-icons-outlined">notifications</span>
        </IconButton>

        <Avatar onClick={signOut} src={user?.photoUrl}/>
        
        </div>

    </div>
  )
}

export default Header