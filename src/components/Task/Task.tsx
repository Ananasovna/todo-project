import React from 'react';
import { ChangeButton } from '../ChangeButton/ChangeButton';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import styles from './Task.module.scss';

type Props = {
  taskName?: string;
  }

export function Task({taskName}: Props) {
  return (
    <div className={styles.task}>
      <h3 className={styles.taskName}>{taskName}</h3>
      <div className={styles.buttonsWrapper}>
        <ChangeButton />
        <DeleteButton />
      </div>
    </div>
  );
}