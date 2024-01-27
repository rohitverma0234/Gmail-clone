import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Header/>

    <div className='app__body'>
    <Sidebar/>

    <Routes>
      <Route path="/mail" element={<Mail/>}/>
      <Route path="/" element={<EmailList/>}/>
    </Routes>
    </div>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
