import React from 'react';
import styles from './UserIcon.module.scss';

export const UserIcon = () => {
    return (
        <div className={styles.avatar}>
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 0C8.736 0 0 8.736 0 19.5C0 30.264 8.736 39 19.5 39C30.264 39 39 30.264 39 19.5C39 8.736 30.264 0 19.5 0ZM19.5 5.85C22.737 5.85 25.35 8.463 25.35 11.7C25.35 14.937 22.737 17.55 19.5 17.55C16.263 17.55 13.65 14.937 13.65 11.7C13.65 8.463 16.263 5.85 19.5 5.85ZM19.5 33.54C14.625 33.54 10.3155 31.044 7.8 27.261C7.8585 23.3805 15.6 21.255 19.5 21.255C23.3805 21.255 31.1415 23.3805 31.2 27.261C28.6845 31.044 24.375 33.54 19.5 33.54Z" fill="#4D4D4D"/>
            </svg>
        </div>
    );
};