import React, { useState } from 'react';
import styles from './ColumnInput.module.scss';
import { SaveTaskButton } from './SaveTaskButton/SaveTaskButton';

type Props = {
  setIsActive: Function;
  }

export function ColumnInput({setIsActive}: Props) {

  return (
    <div className={styles.inputWrapper}>
      <input className={styles.input}>
      </input>
      <SaveTaskButton setIsActive={setIsActive}/>
    </div>
  );
}