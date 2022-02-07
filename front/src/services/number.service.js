import axios from "axios";

// const baseUrl = 'localhost:3000/';

function getNumberInRoman(number) {
    const payload = { number: number};

    return axios.post( '/roman-numerals', payload);
}

export const numberService = {
    getNumberInRoman
}