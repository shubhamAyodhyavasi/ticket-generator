import React from 'react';
import { Dialer, List, Wheel } from './components/'
import './App.css';
import {TicketProvider} from './context/Ticket.context'

function App() {
  return (
    <TicketProvider>
      <div className="App">
        <div className="c-ticket">
          <div className="c-ticket__top">
            <div className="c-ticket__dialer">
              <Dialer />
            </div>
            <div className="c-ticket__wheel">
              <Wheel />
            </div>
          </div>
          <div className="c-ticket__list">
            <List />
          </div>
        </div>
      </div>
    </TicketProvider>
  );
}

export default App;
