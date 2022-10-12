import React from 'react';
import style from './Search.module.scss';
import {SearchIcon} from '../../../icons/SearchIcon/SearchIcon';

export const Search = () => {
    return (
        <div className={style.wrapper}>
            <SearchIcon />
            <input placeholder='Поиск' className={style.input}>
            </input>
        </div>
        
    );
};
