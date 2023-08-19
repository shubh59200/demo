const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
      params: {city: 'Seattle'},
      headers: {
        'X-RapidAPI-Key': '68ab9e0c25msh2de86d89ba747dfp148dcajsnf747a0df7603',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }