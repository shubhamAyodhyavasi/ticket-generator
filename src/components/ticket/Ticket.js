import React from 'react';
import del from '../../assets/delete.svg'
import './ticket.css';

function Ticket({index, ticket, onDelete}) {
    return (
        <div className="c-ticket-item">
            <div className="c-ticket-item__inner">
                <button onClick={onDelete} className="c-ticket-item__delete">
                    <img src={del} width={12} alt="delete"/>
                </button>
                <span className="c-ticket-item__info">
                    Ticket #{index}
                </span>
                <div className="c-ticket-item__number">
                    {`${ticket}`.split("").map((num, ind) => <span key={ind} className="c-ticket-item__digit">{num}</span>)}
                </div>
            </div>
        </div>
    )
}

export default Ticket
