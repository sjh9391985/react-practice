const model = require('../models/emaillist');

module.exports = {
    read: async function(req, res, next) {
        try {
            const results = await model.findAll();
            res.render('index', {
                list: results || []
            });

            res
                .status(200)
                .send({
                    result: 'success',
                    data: results,
                    message: null
                });
        } catch(err){
          next(err);
        }       
    }  
}