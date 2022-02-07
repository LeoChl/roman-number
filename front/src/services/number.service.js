import axios from "axios";

function getNumberInRoman(number) {
    const payload = { number: number};
    return new Promise((resolve) => {
        axios.post( '/roman-numerals', payload);
        return resolve();
    })
}

export const numberService = {
    getNumberInRoman
}