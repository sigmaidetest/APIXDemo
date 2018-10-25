let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {

    console.log(event);

    Swagger.http({
        url: `https://api.dev.fintechmart.online/testApiContexteee/1.0.0/v2/pet`,
        method: 'post',
        query: {},
        headers: { "X-Authorization": "1234", "Accept": "application/xml", "Content-Type": "application/json" },
        body: {
            "id": 1
        }
    }).then((response) => {
        console.log("response", response);
        callback(null, response);

    }).catch((err) => {
        console.log("Error", err);
        callback(err);
    });
}