import Layout, { siteTitle } from '../components/layout';
import SearchBar from '../components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import ToggleOption from '../components/ToggleOption/ToggleOption';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import ForecastCard from '../components/ForecastCard/ForecastCard';
import { getLocationForecast, getLocationWeather } from '../serivces/openWeatherAPI';
import Alert, { AlertTypes } from '../components/Alert/Alert';

const celsius = '°C';
const farenheit = '°F';

export default function Home({ allPostsData }) {

  const [inCelsius, setInCelsius] = useState(true);
  const [session, setSession] = useState('00000000');
  const [location, setLocation] = useState();
  const [locationWeather, setLocationWeather] = useState();
  const [locationForecast, setLocationForecast] = useState();
  const [ alertMessage, setAlertMessage ] = useState('');

  useEffect(() => {
    // if location is set fetch data
    if (location) fetchWeatherData();
  }, [inCelsius]);

  const fetchWeatherData = (locStr) => {
    // clear alert message; TODO: make it a single component service
    setAlertMessage('');

    // fetch weather data
    const query = {
      q: locStr || location,
      units: inCelsius ? 'metric' : 'imperial',
      wforecast: !!session
    }
    getLocationForecast(query)
      .then((res) => {
        if (res.cod === '404') {
          return setAlertMessage(res.message);
        }

        setLocation(locStr || location);
        setLocationWeather(res[0]);
        setLocationForecast(res[1]);
        console.log(res)
      });
  }

  return (
    <Layout>
      <div className="relative flex flex-col overflow-hidden flex-grow">
        {/* <div className='flex justify-end p-2 bg-opacity-30 bg-gray-700'>
        </div> */}
        <div className='flex flex-col flex-grow items-center justify-center w-screen'>
          <div className="flex flex-col lg:w-3/5 w-11/12 relative">
            {alertMessage && (<Alert alertType={AlertTypes.danger} message={alertMessage} />)}
            <SearchBar setResult={setLocation} onSubmit={fetchWeatherData} />
          </div>
          {locationWeather && (
            <section className='flex flex-col relative mt-5 flex-col md:flex-row w-11/12 md:w-auto'>
              <div className="flex rounded-lg mt-5 flex-col md:flex-row w-full overflow-hidden">
                <WeatherCard data={locationWeather} displayInMetric={inCelsius} />
                {session && locationForecast && (<ForecastCard forecast={locationForecast} />)}
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
