import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../redux/slices/filterSlice';

function Filter() {
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(setSearchTerm(evt.target.value));
  };

  return (
    <form className="form">
      <label>
        <span>Find contacts by name</span>
        <input
          className="form-input"
          name="filter"
          type="text"
          placeholder=""
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
