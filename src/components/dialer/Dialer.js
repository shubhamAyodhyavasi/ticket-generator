import React, {useState, useContext} from 'react';
import './dialer.css';
import {ticketContext} from '../../context/Ticket.context';
import { addTicket } from '../../context/Ticket.actions';
import del from '../../assets/delete.svg';
import backspace from '../../assets/backspace-arrow.svg';

function Dialer() {
    const {
        dispatch, state
    } = useContext(ticketContext)
    const [number, setNumber] = useState('')
    const onChange = (e) => {
        const {
            value 
        } = e.target
        setNumber(value.slice(0, 6))
    }
    const addDigit = (digit) => {
        if(!digit) return 
        const value = `${number}${digit}`;
        setNumber(value.slice(0, 6))
    }
    const deleteDigit = () => {
        if(number.length < 1) return 
        setNumber(number.slice(0, number.length - 1))
    }
    const add = () => {
        if(state.includes(number)){
            alert("Ticket already exist!")
            return
        }
        if(state.length >= 5){
            alert("you can only add 5 tickets!")
            return
        }
        dispatch(addTicket(parseInt(number)))
        setNumber("")
    }
    const isMax = number.length > 5;
    const isEmpty = number.length === 0;
    return (
        <div className="c-dialer" >
            <div className="c-dialer__input-warpper">
                <input type="text" value={number} onChange={onChange} className="c-dialer__input"/>
                <span className="c-dialer__input-info">Enter 6 Digits</span>
            </div>
            <div className="c-dialer__number-pad">
                <DialerButton disabled={isMax} onClick={()=> addDigit(7)} number={7} />
                <DialerButton disabled={isMax} onClick={()=> addDigit(8)} number={8} />
                <DialerButton disabled={isMax} onClick={()=> addDigit(9)} number={9} />
                <DialerButton disabled={isMax} onClick={()=> addDigit(4)} number={4} />
                <DialerButton disabled={isMax} onClick={()=> addDigit(5)} number={5} />
                <DialerButton disabled={isMax} onClick={()=> addDigit(6)} number={6} />
                <DialerButton disabled={isMax} onClick={()=> addDigit(1)} number={1} />
                <DialerButton disabled={isMax} onClick={()=> addDigit(2)} number={2} />
                <DialerButton disabled={isMax} onClick={()=> addDigit(3)} number={3} />
                <DialerButton disabled={isEmpty} onClick={deleteDigit} image={backspace} />
                <DialerButton disabled={isMax} onClick={()=> addDigit(0)} number={0} />
                <DialerButton disabled={isEmpty} onClick={()=> setNumber('')} image={del} />
            </div>
            <div className="c-dialer__footer">
                <button disabled={!(number.length === 6)} onClick={add} className="c-dialer__add-ticket">ADD TICKET</button>
            </div>
        </div>
    )
}

const DialerButton = ({disabled, onClick, number, image}) => {
    return <button disabled={disabled} onClick={onClick} className="c-dialer__number">
        {number}
        {image && <img src={image} width={20} alt="delete"/>}
    </button>
}

export default Dialer
