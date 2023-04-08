import React, { useState, useEffect } from "react";
import useSWR from 'swr'
import styles from './searchBar.module.scss';
import { getLocations } from "../../serivces/openWeatherAPI";
import { data } from "autoprefixer";

const searchPlaceHolder = "Search location";
const minCharToSearch = 3;

export default function SearchBar({ children }) {

    const [location, setLocation] = useState('');
    const [locations, setLocations] = useState();

    useEffect(() => {
        // clear locations to remove disambiguation list
        setLocations(null);

        // if value is less then the configured minimum char
        if (location.length <= minCharToSearch) return;

        // the user intent to protect over fetching data
        const fetchLocations = setTimeout(async () => {
            const data = await getLocations(location);
            setLocations(data);
        }, 800);

        return () => clearTimeout(fetchLocations);
    }, [location]);

    return (
        <div className="flex flex-col lg:w-3/5 w-11/12 relative">
            {children}
            <form action="#" className="flex px-3 py-1 bg-white rounded-md w-full">
                <input className="flex-grow outline-none"
                    placeholder={searchPlaceHolder}
                    onChange={(event) => setLocation(event.target.value)}
                />
                <button type="submit" className="outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                </button>
            </form>
            {locations && (
                <LocationItem data={locations} />
            )}
        </div>
    )
}

function LocationItem({ data }) {
    return (
        <ul className="rounded p-1 bg-white rounded w-full absolute top-full mt-1 space-y-1">
            {data.map((location, i) =>
                <li key={i} className="hover:bg-gray-500 bg-opacity-60 rounded hover:text-white cursor-pointer p-2">{`${location.name}, ${location.state}`}</li>
            )}
        </ul>
    )
}