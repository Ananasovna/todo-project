import React from 'react';
import styles from './TaskHeader.module.scss';
import { ChangeButton } from '../../ChangeButton/ChangeButton';
import { DeleteButton } from '../../DeleteButton/DeleteButton';

type Props = {
  taskName?: string;
  }

export function TaskHeader({taskName}: Props) {
  return (
    <div className={styles.header}>
            <h2 className={styles.h2}>{taskName}</h2>
            <div className={styles.buttonsWrapper}>
              <ChangeButton />
              <DeleteButton />
            </div>
          </div>
  );
}