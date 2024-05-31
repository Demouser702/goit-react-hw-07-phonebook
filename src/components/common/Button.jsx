/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

function Button({ children, onClick, type }) {
  const color = '#ff6b0a';
  const hoverColor = '#1e1e93';

  const style = css`
    margin-top: 20px;
    width: 100px;
    height: 30px;
    background-color: ${color};
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 1.25px;
    text-align: center;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover,
    &:focus {
      background-color: ${hoverColor};
    }
  `;

  return (
    <button css={style} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
