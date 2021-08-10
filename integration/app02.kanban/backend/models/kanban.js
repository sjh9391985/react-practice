const util = require('util');
const fs = require('fs');
const path = require('path');


module.exports = {
    findAllCards: async function() {
        try {
            const readFileSync = util.promisify(fs.readFile).bind(fs);
            const data = await fs.readFileSync(path.resolve('.', 'backend', 'models', 'json', 'data.json'), 'utf8', function(){}); 
            return JSON.parse(data);
        } catch(e) {
            console.error(e);
        } finally {

        }
    },
    insertTask: async function() {

    }
}