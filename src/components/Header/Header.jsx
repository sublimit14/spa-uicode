import React from 'react';
import styles from './Header.module.scss'
import {Link} from 'react-router-dom';
import {app_routes} from "../../routes";

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                {
                    app_routes.map((el) => {
                        return <Link className={styles.link} key={el.path} to={el.path}>{el.name}</Link>
                    })
                }
            </div>
        </>
    );
};

export default Header;