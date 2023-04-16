
const host = process.env.NEXT_PUBLIC_WEATHER_API;
const countryCode = process.env.NEXT_PUBLIC_COUNTRY_CODE
const appId = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

const weatherEndpoint = `${host}data/2.5/weather`;
const geolocEndpoint = `${host}geo/1.0/direct`;

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