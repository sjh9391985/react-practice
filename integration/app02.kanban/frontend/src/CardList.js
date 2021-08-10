import React from 'react';
import Card from './Card';
import {PropTypes} from 'prop-types'

import styles from './assets/css/CardList.css'

export default function CardList({title, cards, notifyTask}){    
    return (
        <div className={styles.CardList}>
            <h1>{title}</h1>
            { cards.map(card => <Card 
                                key={card.no} 
                                cardNo = {card.no}
                                title={card.title}
                                tasks={card.tasks}
                                status = {card.status}
                                description={card.description}
                                notifyTask = {notifyTask}
                                />)}

        </div>
        );

}

CardList.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired
}