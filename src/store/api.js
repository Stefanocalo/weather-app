const baseUrl = 'http://api.weatherapi.com/v1/';


export const getForecast = async(query) => {
    const response = await fetch(`${baseUrl}forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${query}&aqi=no&days=3`);
    const json = response.json();
    return json;
};

export const getSearch = async(query) => {
    const response = await fetch(`${baseUrl}search.json?key=${process.env.REACT_APP_API_KEY}&q=${query}&aqi=no`);
    const json = response.json();
    return json;
}



