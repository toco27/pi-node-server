var rb = require('./request-builder');

module.exports = {
    handleRequest: function (req, res) {
        var body = {
            database: {
                status: 'running',
                failures: 0
            },
            server: {
                status: 'running',
                failures: 0
            },
            applications: [
                {
                    id: 'APP_WATER_CLEAR',
                    status: 'burning'
                }
            ]
        };
        res = rb.toJsonResponse(res, 200, body);
        res.end();
        return res;
    }
};

