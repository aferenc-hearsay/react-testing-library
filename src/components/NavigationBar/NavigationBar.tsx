import { NavLink } from 'react-router-dom';
import React from 'react';
import { INavigationBarFC } from '../../types/interfaces';
import styles from './NavigationBar.module.css';

export const NavigationBar: React.FC<INavigationBarFC> = ({ routes }) => {
    return (
        <header>
            <nav className={styles.navbar}>
                {routes.map(route => {
                    return (
                        <NavLink
                            key={route.id}
                            to={route.value}
                            className={navState => (navState.isActive ? styles.active : styles.inactive)}
                        >
                            {route.title}
                        </NavLink>
                    );
                })}
            </nav>
        </header>
    );
};
