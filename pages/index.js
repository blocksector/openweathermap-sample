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
      units: inCelsius ? 'metric' : 'imperial',
      wforecast: !!session
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
            <SearchBar setResult={setLocation} onSubmit={fetchWeatherData} />
          </div>
          {locationWeather && (
            <section className='flex flex-col relative mt-5 flex-col md:flex-row w-11/12 md:w-auto'>
              <div className="flex rounded-lg mt-5 flex-col md:flex-row w-full overflow-hidden">
                <WeatherCard data={locationWeather} displayInMetric={inCelsius} />
                {session && (<ForecastCard />)}
              </div>
              <div className='absolute top-full right-1 ml-2'>
                <ToggleOption styles={'self-end my-3'} labelFalse={farenheit} labelTrue={celsius} onChange={setInCelsius} value={inCelsius} />
              </div>
            </section>
          )}
          {!session && locationWeather && (
            <div className='flex justify-center p-2 bg-opacity-60 bg-gray-600 text-white mt-20'>
              <h1>Show 5-day forecast</h1>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
