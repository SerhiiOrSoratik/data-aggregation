const dashboardModel = require('../models/dashboard');

class Dashboard { 
    getInfo(req, res) {
        dashboardModel.getInfo(req, res);
    }
}

module.exports = new Dashboard();