import React from 'react';
import styles from './TaskBody.module.scss';

export function TaskBody(props: any) {
  return (
    <div className={styles.body}>
      <h3 className={styles.h3}>Описание</h3>
      <div className={styles.description}>Здесь должно быть описание задачи, но оно убежало</div>
    </div>
  );
}