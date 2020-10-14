import React, {useContext} from 'react';
import {ticketContext} from '../../context/Ticket.context'
import {removeTicket} from '../../context/Ticket.actions'
import Ticket from '../ticket/Ticket';
import './list.css';

function List() {
    const {state, dispatch} = useContext(ticketContext)
    return (
        <div className="c-list">
            <h3 className="c-list__title">
                Your Selected Tickets:
            </h3>
            <div className="c-list__ticket-holder">
                {
                    state.map((ticket, index) => <Ticket key={ticket} onDelete={() => {dispatch(removeTicket(ticket))}} index={index+1} ticket={ticket} />)
                }
            </div>
        </div>
    )
}

export default List
