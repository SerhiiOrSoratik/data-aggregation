const dashboardModel = require('../models/dashboard');

class Dashboard { 
    async getInfo(req, res) {   
       res.json(await dashboardModel.getInfo());
    }
}

module.exports = new Dashboard();