import React from 'react';
import { AddTaskButton } from '../../AddTaskButton/AddTaskButton';
import styles from './Column.module.scss';
import { Task } from '../../Task/Task';


type Props = {
  text: string; 
  tasks?: React.ReactNode;
  }

export function Column({text, tasks}: Props) {
  return (
    <div className={styles.column}>
      <h2 className={styles.h2}>{text}</h2>
      <AddTaskButton />
      <div className={styles.taskWrapper}>
      {tasks}
      </div>
    </div>
  );
}