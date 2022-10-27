import React from 'react';
import { SaveIcon } from '../../../icons/SaveIcon/SaveIcon';
import styles from './SaveTaskButton.module.scss';

type Props = {
  setIsActive: Function;
  }

export function SaveTaskButton({setIsActive}: Props) {
  return (
    <button className={styles.button} onClick={() => {
      setIsActive((prev:boolean) => !prev);
    }}>
      <SaveIcon />
    </button>
  );
}