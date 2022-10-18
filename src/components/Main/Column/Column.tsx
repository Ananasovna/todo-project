import React from 'react';
import { AddTaskButton } from '../../AddTaskButton/AddTaskButton';
import styles from './Column.module.scss';
import { Task } from '../../Task/Task';

export function Column(props: any) {
  return (
    <div className={styles.column}>
      <h2 className={styles.h2}>{props.text}</h2>
      <AddTaskButton />
      <div className={styles.taskWrapper}>
      {props.tasks}
      </div>
    </div>
  );
}