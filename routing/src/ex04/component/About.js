import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import SiteLayout from '../layout/SiteLayout';
import styles from '../assets/scss/component/About.scss';

export default function About(){

    return(
        <SiteLayout>
        <div className={styles.About}>
            <h2>About</h2>    
        </div>
    </SiteLayout>
    )
}