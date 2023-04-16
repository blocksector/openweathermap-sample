
const host = process.env.NEXT_PUBLIC_WEATHER_API;
const countryCode = process.env.NEXT_PUBLIC_COUNTRY_CODE
const appId = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

const weatherEndpoint = `${host}data/2.5/weather`;
const forecastEndpoint = `${host}data/2.5/forecast`;
const geolocEndpoint = `${host}geo/1.0/direct`;

export const DayOfTheWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]

export const getLocations = async (location) => {
    const searchParams = new URLSearchParams({
        q: `${location},${countryCode}`,
        limit: 5,
        appid: appId,
    } as any)

    return await fetch(`${geolocEndpoint}?${searchParams}`, {
        "method": "GET",
    }).then((res) => res.json())
}

export const getLocationWeatherByCoords = async ({ lat, lon, units }) => {
    const searchParams = new URLSearchParams({
        lat,
        lon,
        units,
        appid: appId
    } as any)

    return await fetch(`${weatherEndpoint}?${searchParams}`, {
        "method": "GET",
    }).then((res) => res.json())
}

export const getLocationWeather = async ({ q, units, wforecast }) => {
    const searchParams = new URLSearchParams({
        q: `${q},${countryCode}`,
        units,
        appid: appId
    } as any)

    return await fetch(`${weatherEndpoint}?${searchParams}`, {
        "method": "GET",
    }).then((res) => res.json())
}

export const getLocationForecast = async ({ q, units, wforecast }) => {
    const params = {
        q: `${q},${countryCode}`,
        units,
        appid: appId
    }
    let searchParams = new URLSearchParams(params as any);

    // request for current weather and forecast
    const weatherPromises = [];
    weatherPromises.push(fetch(`${weatherEndpoint}?${searchParams}`, {
        "method": "GET",
    }).then((res) => res.json()));
    
    // params['cnt'] = 5;
    // searchParams = new URLSearchParams(params as any);
    weatherPromises.push(fetch(`${forecastEndpoint}?${searchParams}`, {
        "method": "GET",
    }).then((res) => res.json())
    .then((res)=>{
        
        if (res.cod === '404') {
            return res;
        }

        const dailyForecast = [];

        const nowDate = new Date();
        const startDate = new Date();
        startDate.setHours(0);
        startDate.setDate(nowDate.getDate() + 1)

        res.list.forEach((data)=>{
            const dataDate = new Date(data.dt_txt);

            // get data at 6am in the morning
            if (dataDate >= startDate && 6 === dataDate.getHours()) {
                dailyForecast.push(data);
            }
        })
        return {
            dailyForecast,
            name: res.city.name
        };
    }));

    return await Promise.all(weatherPromises); 
}