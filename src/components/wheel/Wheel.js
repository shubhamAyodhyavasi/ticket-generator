import React, {useState, useContext} from 'react';
import {ticketContext} from '../../context/Ticket.context'
import wheel from '../../assets/wheel.png';
import './wheel.css'
import { addRandomTicket } from '../../context/Ticket.actions';


function Wheel() {
    const [isSpinning, setIsSpinning] = useState(false);
    const {
        dispatch, state
    } = useContext(ticketContext)
    const spin = () => {
        if(state.length >= 5){
            alert("you can only add 5 tickets!")
            return
        }
        if(!isSpinning){
            setIsSpinning(true)
            setTimeout(() => {
                dispatch(addRandomTicket(state))
                setIsSpinning(false)
                console.log(state)
            }, 400);
        }
    }
    const spinClassName = `c-wheel__spin ${isSpinning ? 'c-wheel__spin--rotate': ''}`
    return (
        <div className="c-wheel" >
            <h4 className="c-wheel__title">
                Click the wheel to generate random tickets
            </h4>
            <div className="c-wheel__spinner">
                <div className="c-wheel__spin-wapper">
                    <img src={wheel} alt="wheel" onClick={spin} className={spinClassName} />
                </div>
                <div className="c-wheel__arrow"></div>
            </div>
            <div className="c-wheel__footer">
                <span className="c-wheel__info">
                    Ticket number range: 100000 - 999999
                </span>
            </div>
        </div>
    )
}

export default Wheel
