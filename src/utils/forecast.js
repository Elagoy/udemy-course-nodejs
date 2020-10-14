const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f51c8617a06c5e434d5b31c5ecc270f9&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m';
    request({url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service', undefined);
        } else if(body.success == false) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions,
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                icon: body.current.weather_icons
            })
        }
    })
}

module.exports = forecast