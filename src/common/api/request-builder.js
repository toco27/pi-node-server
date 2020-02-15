module.exports = {
    toJsonResponse: function (res, status, result) {
        var body = {
            success: 'true',
            request: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            result: result
        };
        res.writeHead(status, {"Content-Type": "application/json"});
        res.write(JSON.stringify(body));
        return res;
    }
};
