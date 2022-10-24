import React from 'react';
import styles from './Search.module.scss';
import {SearchIcon} from '../../../icons/SearchIcon/SearchIcon';

export const Search = () => {
    return (
        <div className={styles.wrapper}>
            <SearchIcon />
            <input placeholder='Поиск' className={styles.input}>
            </input>
        </div>
        
    );
};
