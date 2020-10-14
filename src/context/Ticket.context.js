import React, {createContext, useReducer} from 'react';
import { ticketTypes } from "./Ticket.actions";

const initialState = [];
const ticketContext = createContext(initialState);
const { Provider } = ticketContext;

const TicketProvider = ( { children } ) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const stateReducer = (state, action) => {
    switch(action.type) {
      case ticketTypes.ADD:
        return [...state, action.ticket];
      case ticketTypes.REMOVE:
        return state.filter(ticket => ticket !== action.ticket);
      default:
        return state;
    };
  }

export { ticketContext, TicketProvider }
