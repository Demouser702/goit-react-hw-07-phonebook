import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  useEffect(() => {
    console.log('Contacts component was mounted');
  }, []);

  const renderList = items => {
    return items.map(el => {
      const name = `${el.name}`;
      const number = `${el.number}`;

      return (
        <div key={el.id} className={styles.phonebookListItem}>
          <span>{name}:</span>
          <span>{number}</span>
          <button type="button" onClick={() => onDeleteContact(el.id)}>
            Delete
          </button>
        </div>
      );
    });
  };

  return (
    <div className={styles.box}>
      <div className={styles.contactsList}>{renderList(contacts)}</div>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
