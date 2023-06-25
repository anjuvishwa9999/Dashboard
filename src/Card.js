import React, { useState } from 'react'

function Card() {
    const [Cards]=useState([
        {
            tittle:'Card-1',
            text:'this is a card'
        },
        {
            tittle:'Card-2',
            text:'this is a card'
        },
        {
            tittle:'Card-2',
            text:'this is a card'
        },
    ])
    return (
        <div className='container'>
            <section>
                <div className='cards'>
                    {Cards.map((card,i)=>{
                        <div key={i} className='card'>
                            <h1>{card.tittle}</h1>
                            <h1>{card.text}</h1>

                        </div>
                    })}
                </div>
            </section>
        </div>
        
    )
}



export default (Card);
