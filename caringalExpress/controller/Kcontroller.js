const model = require('../model/kmodel');

module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    create: (req, res) => {
        res.render('create');
    },
    save: (req, res) => {
        const data = req.body;
        model.save(data, (err) => {
            if(err) throw err;
            res.redirect('/');
        })
        console.log(data);  
         
    },
    display: (req, res) => {
        model.displayUsers((err, results) => {
            if(err) throw err;
            res.render('display', {users: results})
            
        })
    }
}