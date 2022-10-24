import React from 'react';
import styles from './TaskCard.module.scss';
import { ChangeButton } from '../ChangeButton/ChangeButton';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { TaskHeader } from './TaskHeader/TaskHeader';
import { TaskBody } from './TaskBody/TaskBody';
import { TaskSidebar } from './TaskSidebar/TaskSidebar';

type Props = {
  taskName?: string;
  }

export function TaskCard({taskName}: Props) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.bg}></div>
        <div className={styles.taskCard}>
          <TaskHeader taskName='Самая важная задача'/>
          <div className={styles.bodyWrapper}>
            <TaskBody />
            <TaskSidebar />
          </div>
        </div>
    </div>
  );
}