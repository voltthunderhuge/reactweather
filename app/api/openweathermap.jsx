const axios = require("axios");

// api key
// 4eed2d460c9a42a01c14c8c601ea6aa8

const baseURL = "https://api.openweathermap.org/data/2.5/weather?appid=4eed2d460c9a42a01c14c8c601ea6aa8";

function getTemperature(location) {
    const encodedComponent = encodeURIComponent(location);
    const requestURL = `${baseURL}&q=${encodedComponent}&units=metric`;

    return axios.get(requestURL).then(function(res) {
        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            return res.data.main.temp;
        }
    }, function(err) {
          throw new Error(err.response.data.message);
    });
}

module.exports = {
    getTemperature: getTemperature
};
