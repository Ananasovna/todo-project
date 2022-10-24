import React from 'react';
import { ChangeIcon } from '../../icons/ChangeIcon/ChangeIcon';
import styles from './ChangeButton.module.scss';

export function ChangeButton(props: any) {
  return (
    <button className={styles.button}>
      <ChangeIcon />
    </button>
  );
}