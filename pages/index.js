import Layout, { siteTitle } from '../components/layout';
import SearchBar from '../components/searchBar/searchBar';
import { useState } from 'react';
import ToggleOption from '../components/switch/toggleOption';
import WeatherCard from '../components/weatherCard/weatherCard';
import ForecastCard from '../components/forecastCard/forcastCard';

const celsius = '°C';
const farenheit = '°F';

export default function Home({ allPostsData }) {

  const [inCelsius, setInCelsius] = useState(true);

  return (
    <Layout>
      <div className="relative flex flex-col overflow-hidden flex-grow">
        <div className='flex justify-end p-2 bg-opacity-30 bg-gray-700'>
        </div>
        <div className='flex flex-col flex-grow items-center justify-center w-screen'>
          <SearchBar>
            <ToggleOption styles={'self-end my-3'} labelFalse={farenheit} labelTrue={celsius} onChange={setInCelsius} value={inCelsius} />

          </SearchBar>
          <div className="flex flex-col md:flex-row mt-5 w-80 md:w-auto rounded-lg overflow-hidden">
            <WeatherCard></WeatherCard>
            <ForecastCard></ForecastCard>
          </div>
        </div>
      </div>
    </Layout>
  );
}
