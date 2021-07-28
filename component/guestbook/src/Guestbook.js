import React, {Fragment} from 'react';
import GuestbookForm from './GuestbookForm';
import GuestbookList from './GuestbookList';
import infos from './data.json';

export default function Guestbook({title}){
    return(
        <div className={'Guestbook'}>
            <h1>{title}</h1>
            <GuestbookForm />
            <GuestbookList key="1" name={'둘리'} infos={infos.filter(info => info.no=="1")} />
            <GuestbookList key="2" name={'마이콜'} infos={infos.filter(info => info.no=="2")} />
            <GuestbookList key="3" name={'또치'} infos={infos.filter(info => info.no=="3")} />
        </div>
    )
}