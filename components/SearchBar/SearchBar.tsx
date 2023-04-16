/**
 * Search Bar component
 */

import React, { useState } from "react";
import Alert, { AlertTypes } from "../Alert/Alert";

const searchPlaceHolder = "Search location";
const minCharToSearch = 1;

export default function SearchBar({ onSubmit }) {

    const [searchStr, setSearchStr] = useState('');
    const [ alertMessage, setAlertMessage ] = useState('');

    /** disambiguation */
    // const [locations, setLocations] = useState();
    // useEffect(() => {
    //     // clear locations to remove disambiguation list
    //     setLocations(null);

    //     // if value is less then the configured minimum char
    //     if (searchStr.length <= minCharToSearch) return;

    //     // the user intent to protect over fetching data
    //     const fetchLocations = setTimeout(async () => {
    //         const data = await getLocations(searchStr);
    //         setLocations(data);
    //     }, 800);

    //     return () => clearTimeout(fetchLocations);
    // }, [searchStr]);

    const triggerSubmit = (ev) => {

        // prevent reloading of the page
        ev.preventDefault();

        // clear alert messages
        setAlertMessage('');

        // prevent action if number of chars below the threshold to trigger search
        if (searchStr.length < minCharToSearch) {
            setAlertMessage(`Min of ${minCharToSearch} characters to search`)
            return false;
        };

        // invok onSubmit prop function
        onSubmit(searchStr);
    }

    return (
        <>
            {alertMessage && (<Alert alertType={AlertTypes.danger} message={alertMessage} duration={200} />)}
            <form onSubmit={triggerSubmit} className="flex px-3 py-1 bg-white rounded-md w-full">
                <input className="flex-grow outline-none"
                    placeholder={searchPlaceHolder}
                    onChange={(event) => setSearchStr(event.target.value)}
                />
                <button type="submit" className="outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                </button>
            </form>

            {/* {locations && (
                <ul className="rounded p-1 bg-white rounded w-full absolute top-full mt-1 space-y-1">
                    {locations.map((location, i) =>
                        <li key={i} onClick={() => setLocation(location)} className="hover:bg-gray-500 bg-opacity-60 rounded hover:text-white cursor-pointer p-2">{`${location.name}, ${location.state}`}</li>
                    )}
                </ul>
            )} */}
        </>
    )
}