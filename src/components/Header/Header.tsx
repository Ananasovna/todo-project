import React from 'react';
import styles from "./header.module.scss";
import {Search} from './Search/Search';
import {UserIcon} from '../../icons/UserIcon/UserIcon';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Search />
            <UserIcon />
        </header>
    );
};
