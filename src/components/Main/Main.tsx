import React from 'react';
import { Column } from './Column/Column';
import styles from './Main.module.scss';
import { Task } from '../Task/Task';
import { AddColumnButton } from '../AddColumnButton/AddColumnButton';

export function Main() {
  return (
    <main className={styles.main}>
      <Column text='Новые' tasks={<Task taskName='Сверстать макет'/>}/>
      <Column text='В работе' tasks={<Task taskName='Сделать вид, что я работаю и бла бла бла бла бла'/>}/>
      <Column text='На проверке'/>
      <AddColumnButton />
    </main>
  );
}
