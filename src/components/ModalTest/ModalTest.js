import React from 'react';
import PropTypes from 'prop-types';

/** A super lame component that says Hello with a custom message. */
function ModalTest({message}) {
  return <div style={{color: 'green'}}> Hello2 {message}</div>
}

ModalTest.propTypes = {
  /** Message to display */
  message: PropTypes.string
};

ModalTest.defaultProps = {
  message: 'ModalTest'
};

export default ModalTest;
