const express = require('express');
const router = express.Router();
const { isWithinRange, isNumeric, convertNumberToRoman } = require("../services/roman_number");

router.post('/roman-numerals', function(req, res) {
  if (!req.body.hasOwnProperty('number')) {
    return res.status(400)
        .json({
          message: 'Invalid body, allowed property: number'
        });
  }

  const number = req.body.number;

  if (!isNumeric(number)) {
    return res.status(400)
        .json({
          message: 'Wrong format'
        });
  }

  if (!isWithinRange(number)) {
    return res.status(400)
        .json({
          message: 'The number is not within authorized range (1 - 100). Zero does not have its own Roman numeral'
        });
  }

  return res.json({
    number: convertNumberToRoman(number)
  });
});

module.exports = router;
