import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import styles from './UserCard.module.scss';

function UserCard(props) {
  const { fullname, picture } = props;

  const [isChange, setIsChange] = useState(false);
  const wrapperClassName = classNames(styles.innerWrapper, {
    [styles.innerWrapperChange]: isChange,
  });
}


const changeBtn = useMemo(
    () => <button onClick={() => setIsChange}
);