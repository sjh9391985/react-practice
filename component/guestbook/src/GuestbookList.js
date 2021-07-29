import React from 'react';
import Info from './Info';
import styles from './assets/css/GuestbookList.css'

export default function GuestbookList({infos}){

    return(
        <div className={styles.GuestbookList}>
            {infos.map(info => <Info
                                key={info.no}
                                name={info.name}
                                message={info.message}
                                regDate={info.regDate}/>)}
        </div>        
    )

}