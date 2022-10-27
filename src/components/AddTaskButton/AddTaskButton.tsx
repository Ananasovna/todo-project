import React from 'react';
import styles from './AddTaskButton.module.scss';

type Props = {
  setIsActive: Function;
  }

export function AddTaskButton({setIsActive}: Props) {
  return (
    <button className={styles.button} onClick={() => {
      setIsActive((prev:boolean) => !prev);
    }}>
      +
    </button>
  );
}