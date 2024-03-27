import React from 'react';
import "./EmailList.css";
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Section from './Section';
import EmailRow from './EmailRow';

const EmailList = () => {
  return (
    <div className='emailList'>
        <div className='emailList__settings'>

        <div className='emailList__settingsLeft'>
        <input type='checkbox' className='checkbox'/>
        <IconButton><ArrowDropDown/></IconButton>
        <IconButton><Redo/></IconButton>
        <IconButton></IconButton>
        <IconButton><MoreVert/></IconButton>
        </div>

        <div className='emailList__settingsRight'>
        <IconButton><ChevronLeft/></IconButton>
        <IconButton><ChevronRight/></IconButton>
        <IconButton><KeyboardHide/></IconButton>
        <IconButton><Settings/></IconButton>
        </div>

        </div>

        <div className='emailList__sections'>
        <Section Icon={Inbox} title="Primary" color="red" selected={true}/>
        <Section Icon={People} title="Social" color="#1A73E8"/>
        <Section Icon={LocalOffer} title="Promotions" color="green"/>
        </div>

        <div className='emialList__list'>
        <EmailRow title="GitHub" subject="Account!!!" description="Good Morning, Thanks for creating an Account on GitHub" time="11AM"/>
        <EmailRow title="GitHub" subject="Account" description="Thanks for creating an Account on GitHub" time="11AM"/>
        </div>

    </div>
  )
}

export default EmailList