import React, { useState, useEffect } from 'react';
import { Routes, Route, } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import api from '../api/contacts';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';

function App() {

  const [contacts, setContacts] = useState([]);

  //RetrieveContactsFromApi
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  //AddContact
  const addContactHandler = async (contact) => {

    let newName = contact.name;
    newName = newName.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    Object.assign(contact, { name: newName });

    const request = { id: uuid(), ...contact, };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  //UpdateContact
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  //DeleteContact
  const removeContactHandler = async (id) => {

    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  return (
    <div className="myMain">
      <Header />
      <Routes>
        <Route path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
        <Route path='add' element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="edit" element={<EditContact updateContactHandler={updateContactHandler} />} />
        <Route path="*" element={<main style={{ padding: "1rem" }}><p>Nothing here ...</p></main>} />
      </Routes>

    </div>
  );
}

export default App;
