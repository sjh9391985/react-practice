import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import SiteLayout from '../layout/SiteLayout';
import styles from '../assets/scss/component/Guestbook.scss';

export default function Guestbook() {

    return (
        <SiteLayout>
            <div className={styles.Guestbook}>
                <h2>Guestbook</h2>
            </div>
        </SiteLayout>
    )
}