import React from 'react';
import styles from './Display.module.css';

export const ResultBox = ({ children }) => <div className={styles.resultBox}>{children}</div>;
export const StepList = ({ steps }) => (
  <ul className={styles.stepList}>
    {steps.map((step, idx) => <li key={idx}>{step}</li>)}
  </ul>
);
export const InfoBox = ({ children }) => <div className={styles.infoBox}>{children}</div>;
export const MonoBlock = ({ children }) => <pre className={styles.monoBlock}>{children}</pre>;
