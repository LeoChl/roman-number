const express = require('express');
const router = express.Router();
const Client = require('../models/client');
const Response = require('../models/response');
const { SSE_RESPONSE_HEADER } = require("../constants/sse");
const { isWithinRange, isNumeric, convertNumberToRoman } = require("../services/roman_number");

let clients = [];

router.get('/roman-numerals/sse', function(req, res) {
  res.writeHead(200, SSE_RESPONSE_HEADER);
  res.write(`data: ${ JSON.stringify(new Response()) } \n\n`);
  res.flushHeaders();

  const clientId = Date.now();
  const client = new Client(clientId, res);

  clients.push(client);

  req.on('close', () => {
    console.log('close');
    clients = clients.filter(client => client.id !== clientId);
  });
});


router.post('/roman-numerals', function(req, res) {
    let response = new Response();

    if (!req.body.hasOwnProperty('number')) {
      response.error = 'Invalid body, allowed property: number';
      res.json(400);
      return sendEventsToClients(response);
    }

    const number = req.body.number;

    if (!isNumeric(number)) {
      response.error = 'Wrong format';
      res.json(400);
      return sendEventsToClients(response);
    }

    if (!isWithinRange(number)) {
      response.error = 'The number is not within authorized range (1 - 100).\ ' +
        'Zero does not have its own Roman numeral';
      res.json(400);
      return sendEventsToClients(response);
    }

    response.number = convertNumberToRoman(number);
    res.json(200);
    return sendEventsToClients(response);
});

function sendEventsToClients(response) {
  clients.forEach(client => client.res.write(`data: ${ JSON.stringify(response) }\n\n`))
}

module.exports = router;
