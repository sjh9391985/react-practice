import React from 'react';
import Info from './Info';

export default function GuestbookList({infos}){

    return(
        <div className={'GuestbookList'}>
            {infos.map(info => <Info
                                key={info.no}
                                name={info.name}
                                message={info.message}
                                regDate={info.regDate}/>)}
        </div>        
    )

}