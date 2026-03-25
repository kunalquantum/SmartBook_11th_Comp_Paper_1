import React from 'react';
import styles from './SimCard.module.css';

const SimCard = ({ title, children }) => {
  return (
    <div className={styles.simCard}>
      <h3>{title}</h3>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default SimCard;
