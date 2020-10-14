export const getRandomNumber = (exist = []) => {
    let number = Math.floor(100000 + Math.random() * 900000)
    while (exist.includes(number)) {
        number = Math.floor(100000 + Math.random() * 900000)
    }
    return number
}