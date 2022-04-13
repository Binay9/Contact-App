import React, { useState, useEffect } from 'react';
import { Routes, Route, } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import api from '../api/contacts';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function App() {

  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //RetrieveContacts
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  //AddContact
  const addContactHandler = async (contact) => {

    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  //DeleteContact
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(
    () => {
      // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      // if (retriveContacts) setContacts(retriveContacts);
      const getAllContacts = async () => {
        const allContacts = await retriveContacts();
        if (allContacts) setContacts(allContacts);
      };
      getAllContacts();
    }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="myMain">
      <Header />
      <Routes>
        <Route path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
        <Route path='add' element={<AddContact addContactHandler={addContactHandler} />} />

        <Route path="*" element={<main style={{ padding: "1rem" }}><p>Nothing here ...</p></main>} />

      </Routes>

    </div>
  );
}

export default App;
