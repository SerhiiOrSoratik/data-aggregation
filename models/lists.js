const knexDb = require('../knex');

class ListModel {

    createList(req, res) {
        const {id, title} = req.body;
        knexDb('lists').insert({id: id, title: title}, "*")
        .catch((err) => {
            res.json(err);
        })
        .then((data) => {
            res.status(201);
            res.json(data);
        });
    }

    getLists(req, res) {
        knexDb("lists").then((data) => {
            res.status(200);
            res.json(data);
        })
    }

    updateTask(req, res) {
        knexDb('lists')
            .where('id', req.params.id)
            .update({title: req.body.title}, "*")
            .catch((err) => {
                res.json(err);
            })
            .then((data) => {
                    res.status(200);
                    res.json(data);
            });
    }

    deleteList(req, res) {
        knexDb('lists')
        .where('id', req.params.id) 
        .del()
        .catch((err) => {
            res.json(err);
        })
        .then(() => {
            res.status(200);
            res.end();
        })
    }

    getTasks(req, res) {
        const listid = req.params.listid;
        const all = req.query.all;
        if (all === 'true') {
             knexDb("todo")
             .where('listid', listid)
             .then((data) => {
                res.status(200);
                res.json(data);
            })
        }    
        else if(all === 'false') {
             knexDb("todo")
             .where({listid: listid, done: false})
             .then((data) => {
                res.status(200);
                res.json(data);
            })
        }
        else {
            res.status(400);
            res.end('Bad request');
        }     
    }

}

module.exports = new ListModel();