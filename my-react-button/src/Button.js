import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, children, onClick }) => {
  let buttonClass = 'button';

  switch (type) {
    case 'primary':
      buttonClass += ' button--primary';
      break;
    case 'default':
      buttonClass += ' button--default';
      break;
    case 'dashed':
      buttonClass += ' button--dashed';
      break;
    case 'text':
      buttonClass += ' button--text';
      break;
    case 'link':
      buttonClass += ' button--link';
      break;
    default:
      buttonClass += ' button--default';
      break;
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'default',
  onClick: () => {},
};

export default Button;