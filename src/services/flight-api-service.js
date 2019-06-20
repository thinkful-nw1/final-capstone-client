import config from '../config';

const FlightApiService = {
  searchFlight(flight) {
    return fetch(`${config.API_ENDPOINT}/flights`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(flight)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default FlightApiService;
