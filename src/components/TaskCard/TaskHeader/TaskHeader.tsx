import React from 'react';
import styles from './TaskHeader.module.scss';
import { ChangeButton } from '../../ChangeButton/ChangeButton';
import { DeleteButton } from '../../DeleteButton/DeleteButton';

export function TaskHeader(props: any) {
  return (
    <div className={styles.header}>
            <h2 className={styles.h2}>Задача</h2>
            <div className={styles.buttonsWrapper}>
              <ChangeButton />
              <DeleteButton />
            </div>
          </div>
  );
}