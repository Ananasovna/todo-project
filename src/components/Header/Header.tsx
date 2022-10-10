import React from 'react';
import style from "./header.module.scss";
import {Search} from './Search/Search';
import {User} from './User/User';

export const Header = () => {
    return (
        <header className={style.header}>
            <Search />
            <User />
        </header>
    );
};
