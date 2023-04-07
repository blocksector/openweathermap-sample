import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import SearchBar from '../components/searchBar/searchBar';
import { useState } from 'react';
import ToggleOption from '../components/switch/toggleOption';

const celsius = '°C';
const farenheit = '°F';

export default function Home({ allPostsData }) {

  const [inCelsius, setInCelsius] = useState(true);

  return (
    <Layout>
      <div className="relative flex flex-col overflow-hidden">
        <div className='flex justify-end p-2 bg-opacity-30 bg-gray-700'>
          <ToggleOption labelFalse={farenheit} labelTrue={celsius} onChange={setInCelsius} value={inCelsius} />
        </div>
        <SearchBar></SearchBar>
      </div>
    </Layout>
  );
}
