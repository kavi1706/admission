import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import image from "./assests/ad.jpg";
import ContactList from './components/contacts/ContactList/ContactList';
import AddContact from './components/contacts/AddContact/AddContact';
import ViewContact from './components/contacts/ViewContact/ViewContact';
import EditContact from './components/contacts/EditContact/EditContact';
import Spinner from './components/spinner/spinner'
import Home from "./Home";
let App =() => {
  return (
    <>
  
    <NavBar/>
    
    
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/contacts/list'} element={<ContactList/>}/>
      <Route path={'/contacts/add'} element={<AddContact/>}/>
      <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
      <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
      {/* <Route path={'/contacts/delete/:contactId'} element={<DeleteContact/>}/> */}
    </Routes>
    </>
  );
}

export default App;
