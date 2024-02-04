import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen:false,
    selectedMail:null
  },
  
  reducers: {
    selectMail:(state,action)=>{
      state.selectedMail=action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    }
  }
});

export const { selectMail,openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state)=>state.mail.selectedMail;

export default mailSlice.reducer;