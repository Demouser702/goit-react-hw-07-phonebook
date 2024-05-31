import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  useEffect(() => {
    console.log('ContactForm was mounted');
    return () => console.log('ContactForm will be unmounted');
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData({
      name: '',
      number: '',
    });
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const { name, number } = formData;

  return (
    <form className={`form ${styles.box}`} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label>
          <span>Name </span>
          <input
            className="form-input"
            value={name}
            name="name"
            type="text"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Number </span>
          <input
            className="form-input"
            value={number}
            name="number"
            type="tel"
            onChange={handleChange}
            pattern="\\+?\\d{1,4}[-.\\s]?\\(\\d{1,3}\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <Button type="submit">Add contact</Button>
    </form>
  );
};

ContactForm.propTypes = { onFormSubmit: PropTypes.func.isRequired };

export default ContactForm;
