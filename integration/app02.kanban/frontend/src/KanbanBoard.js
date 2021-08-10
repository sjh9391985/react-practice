import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import styles from './assets/css/Kanban.css'

export default function KanbanBoard(){

    const [cards, setCards] = useState([]);

    useEffect(async() => {
        try{
            const response = await fetch('/api/cards', {
                method:'get', 
                headers:{'Content-Type':'application/json'} //post방식일때는 꼭 붙여줘야한다.
            })

            //통신에러 점검
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            // application 내부 점검
            const json =await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            setCards(json.data);

        }catch(err){
            console.log(err);
        }
    },[]); 

    return (
        <div className={styles.KanbanBoard}>
            <CardList key='ToDo' title={"ToDo"} cards={cards.filter(card => card.status=="ToDo")}/>
            <CardList key='Doing' title={"Doing"} cards ={cards.filter(card => card.status=="Doing")}/>
            <CardList key='Done' title={"Done"} cards ={cards.filter(card => card.status=="Done")}/>
        </div>
        );

}