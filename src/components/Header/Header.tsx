import React from 'react';
import style from "./header.module.scss";
import {Search} from './Search/Search';
import {UserIcon} from '../../icons/UserIcon/UserIcon';

export const Header = () => {

    // лишння вложенность можно тут все хранить (кроме иконок )

    return (
        <header className={style.header}>
            <Search />
            <UserIcon />
        </header>
    );
};
