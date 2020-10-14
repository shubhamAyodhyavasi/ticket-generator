import {getRandomNumber} from '../logics/generator'
export const ticketTypes = {
    ADD: "ADD",
    REMOVE: "REMOVE"
} 
export const addRandomTicket = (tickets = []) => {
    return addTicket(getRandomNumber(tickets))
}
export const addTicket = (ticket) => {
    return {
        type: ticketTypes.ADD,
        ticket: ticket
    }
}
export const removeTicket = (ticket = '') => {
    return {
        type: ticketTypes.REMOVE,
        ticket
    }
}
