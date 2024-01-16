const { handler } = require('netlify-lambda');
const items = [{ name: 'susan' }, { name: 'anna' }];
const items2 = require('../assets/data');
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Log the error for debugging
    return {
      statusCode: 500,
      body: "good"
    };
 
}
