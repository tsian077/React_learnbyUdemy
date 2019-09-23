import React from 'react';
import Card from './Card'

const CardList = ({robots})=>{
    const cardComponent = robots.map((users,i)=>{
        return <Card 
        key={i} 
        id={users.id} 
        name={users.name} 
        email={users.email}/>
    })
    return (
        <div>
            {cardComponent}
        </div>
       
    );
}

export default CardList;