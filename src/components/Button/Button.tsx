import React from "react";
import styles from './Button.module.scss';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps): JSX.Element => {
  return <button className={styles.test}>
    <div>{props.label}</div>
    <div className={styles.test}>{props.label}</div>
  </button>;
};

export default Button;
