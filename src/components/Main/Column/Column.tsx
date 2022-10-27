import React, { useState } from 'react';
import { AddTaskButton } from '../../AddTaskButton/AddTaskButton';
import styles from './Column.module.scss';
import { Task } from '../../Task/Task';
import { ColumnInput } from '../../ColumnInput/ColumnInput';


type Props = {
  text: string; 
  tasks?: React.ReactNode;
  }

export function Column({text, tasks}: Props) {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  return (
    <div className={styles.column}>
      <h2 className={styles.h2}>{text}</h2>
      <AddTaskButton setIsActive={setIsActive}/>
      <div className={styles.taskWrapper}>
      {tasks}
      </div>
      {isActive && <ColumnInput setIsActive={setIsActive}/>}
    </div>
  );
}