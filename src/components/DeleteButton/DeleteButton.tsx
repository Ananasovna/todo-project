import React from 'react';
import { DeleteIcon } from '../../icons/DeleteIcon/DeleteIcon';
import styles from './DeleteButton.module.scss';

export function DeleteButton(props: any) {
  return (
    <button className={styles.button}>
      <DeleteIcon />
    </button>
  );
}