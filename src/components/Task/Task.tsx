import React from 'react';
import { ChangeButton } from '../ChangeButton/ChangeButton';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import styles from './Task.module.scss';

export function Task(props: any) {
  return (
    <div className={styles.task}>
      <h3 className={styles.taskName}>{props.taskName}</h3>
      <div className={styles.buttonsWrapper}>
        <ChangeButton />
        <DeleteButton />
      </div>
    </div>
  );
}