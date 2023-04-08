import Layout, { siteTitle } from '../components/layout';
import SearchBar from '../components/searchBar/searchBar';
import { useState, useEffect } from 'react';
import ToggleOption from '../components/switch/toggleOption';
import WeatherCard from '../components/weatherCard/weatherCard';
import ForecastCard from '../components/forecastCard/forcastCard';
import { getLocationWeather } from '../serivces/openWeatherAPI';

const celsius = '°C';
const farenheit = '°F';

export default function Home({ allPostsData }) {

  const [inCelsius, setInCelsius] = useState(true);
  const [session, setSession] = useState();
  const [location, setLocation] = useState();
  const [locationWeather, setLocationWeather] = useState();

  useEffect(() => {
    if (!location) return;
    fetchWeatherData();
  }, [inCelsius]);

  const fetchWeatherData = () => {
    // fetch weather data
    const query = {
      q: location,
      units: inCelsius ? 'metric' : 'imperial'
    }

    getLocationWeather(query)
      .then((res) => {
        console.log(res);

        if (res.cod !== '404') {
          setLocationWeather(res);
        }
      });
  }

  return (
    <Layout>
      <div className="relative flex flex-col overflow-hidden flex-grow">
        {/* <div className='flex justify-end p-2 bg-opacity-30 bg-gray-700'>
        </div> */}
        <div className='flex flex-col flex-grow items-center justify-center w-screen'>
          <div className="flex flex-col lg:w-3/5 w-11/12 relative">
            <ToggleOption styles={'self-end my-3'} labelFalse={farenheit} labelTrue={celsius} onChange={setInCelsius} value={inCelsius} />
            <SearchBar setResult={setLocation} onSubmit={fetchWeatherData} />
          </div>
          <div className="flex flex-col md:flex-row mt-5 w-80 md:w-auto rounded-lg overflow-hidden">
            {locationWeather && (<WeatherCard data={locationWeather} />)}
            {session && (<ForecastCard />)}
          </div>
        </div>
      </div>
    </Layout>
  );
}
