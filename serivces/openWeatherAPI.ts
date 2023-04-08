
const host = 'http://api.openweathermap.org/';
const countryCode = 'PH'

export const getLocations = async (location) => {
    const url = `${host}geo/1.0/direct`
    const searchParams = new URLSearchParams({
        q: `${location},${countryCode}`,
        limit: 5,
        appid: '84b2b2735a2179451a1abf6de6b7e12d',
    } as any)

    return await fetch(`${url}?${searchParams}`, {
        "method": "GET",
    }).then((res) => res.json())
}