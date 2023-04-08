
const host = 'http://api.openweathermap.org/';
const countryCode = 'PH'
const appId = '';

export const getLocations = async (location) => {
    const url = `${host}geo/1.0/direct`
    const searchParams = new URLSearchParams({
        q: `${location},${countryCode}`,
        limit: 5,
        appid: appId,
    } as any)

    return await fetch(`${url}?${searchParams}`, {
        "method": "GET",
    }).then((res) => res.json())
}

export const getLocationWeatherByCoords = async ({ lat, lon, units }) => {
    const url = `${host}data/2.5/weather`
    const searchParams = new URLSearchParams({
        lat,
        lon,
        units,
        appid: appId
    } as any)

    return await fetch(`${url}?${searchParams}`, {
        "method": "GET",
    }).then((res) => res.json())
}

export const getLocationWeather = async ({ q, units, wforecast }) => {
    const url = `${host}data/2.5/weather`
    const searchParams = new URLSearchParams({
        q: `${q},${countryCode}`,
        units,
        appid: appId
    } as any)

    return await fetch(`${url}?${searchParams}`, {
        "method": "GET",
    }).then((res) => res.json())
}