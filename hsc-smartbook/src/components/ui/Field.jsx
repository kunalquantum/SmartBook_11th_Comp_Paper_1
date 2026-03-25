import React from 'react';
import styles from './Field.module.css';

const Field = ({ label, type = 'text', value, onChange, options = [] }) => {
  return (
    <div className={styles.field}>
      {label && <label>{label}</label>}
      {type === 'select' ? (
        <select value={value} onChange={onChange}>
          {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
      ) : (
        <input type={type} value={value} onChange={onChange} />
      )}
    </div>
  );
};

export default Field;
