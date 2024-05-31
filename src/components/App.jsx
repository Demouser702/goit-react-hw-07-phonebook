import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filter from './Filter/Filter';
import ContactList from './Contacts/ContactList';
import { nanoid } from 'nanoid';
import ContactForm from './Contacts/ContactForm/ContactForm';
import {
  selectFilter,
  setSearchTerm,
  resetFilter,
} from '../redux/slices/filterSlice';
import {
  addContact,
  deleteContact,
  selectContacts,
} from '../redux/slices/contactSlice';

localStorage.removeItem('contacts');
const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(resetFilter());
  }, [dispatch]);

  useEffect(() => {
    const data = localStorage.getItem('contacts');
    if (data) {
      try {
        const parsedContacts = JSON.parse(data);
        parsedContacts.forEach(contact => dispatch(addContact(contact)));
      } catch (error) {
        console.error(error);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = data => {
    const { name, number } = data;
    const isContactInList = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactInList) {
      alert('Contact already exists!');
      return;
    }
    const contactToAdd = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(contactToAdd));
  };

  const handleFilterChange = filter => {
    dispatch(setSearchTerm(filter));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1 className="heading">Phonebook</h1>
      <ContactForm onFormSubmit={handleAddContact} />

      <h1 className="heading">Contacts</h1>
      <Filter value={filter} onChange={handleFilterChange} />
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      ) : (
        <p className="empty-state">No contacts found.</p>
      )}
    </div>
  );
};

export default App;
