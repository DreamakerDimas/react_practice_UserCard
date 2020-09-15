import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    field,
    form,
    meta: { error, touched },
    ...restProps
  } = props;

  console.log(field);

  const isError = Boolean(touched && typeof error !== 'undefined');
  const isValid = Boolean(touched && typeof error === 'undefined');

  const inputClassName = classNames(styles.field, {
    [styles.fieldError]: isError,
    [styles.fieldValid]: isValid,
  });

  return (
    <label className={styles.label}>
      <input {...restProps} {...field} className={inputClassName} />
      {isError && <span className={styles.error}>{error}</span>}
    </label>
  );
}

Input.propTypes = {
  field: PropTypes.object.isRequired,
};

export default Input;
