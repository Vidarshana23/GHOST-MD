const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "KGgF2CBR#DVEpV477XWxtzcGb5spQsfql7ha7qdpljqSuKCTnHo0",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
