import React from 'react'
import "./Sidebar.css"
import { Button, IconButton } from '@mui/material'
import SidebarOption from './SidebarOption'
import { AccessTime, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
    <Button startIcon={<span className="material-icons-outlined">add</span>} className='sidebar__compose' onClick={()=>dispatch(openSendMessage())}>compose</Button>

    <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true}/>
    <SidebarOption Icon={Star} title="Starred" number={54}/>
    <SidebarOption Icon={AccessTime} title="snoozed" number={54} />
    <SidebarOption Icon={LabelImportant} title="Important" number={54} />
    <SidebarOption Icon={NearMe} title="Sent" number={54} />
    <SidebarOption Icon={Note} title="Drafts" number={54} />
    <SidebarOption Icon={ExpandMore} title="More" number={54} />

    <div className='sidebar__footer'>
    <div className='sidebar__footerIcons'>
    <IconButton><Person/></IconButton>
    <IconButton><Duo/></IconButton>
    <IconButton><Phone/></IconButton>
    </div>
    </div>
    </div>
    
  )
}

export default Sidebar