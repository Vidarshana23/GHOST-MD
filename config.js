const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "PPBznIja#Qr-7O21eFfonzx0vKQmWTecFCPLIiAnI1-0JEfk_GMU",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
