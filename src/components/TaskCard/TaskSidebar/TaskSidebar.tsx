import React from 'react';
import styles from './TaskSidebar.module.scss';

export function TaskSidebar(props: any) {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.h3}>Описание</h3>
      <div className={props.description}></div>
    </div>
  );
}