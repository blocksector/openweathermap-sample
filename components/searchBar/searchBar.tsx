import React, { useState, useRef } from "react";
import styles from './searchBar.module.scss';

const searchPlaceHolder = "Search location";

export default function SearchBar({ children }) {

    const [location, setLocation] = useState('');

    let intentTimer;
    const searchIntent = ({target}) => {

        if (intentTimer) {
            clearTimeout(intentTimer);
            intentTimer = null;
        }
        
        intentTimer = setTimeout(() => {
            intentTimer = null;

            // fetch data
        }, 300);
    }

    return (
        <div className="flex flex-col lg:w-3/5 w-11/12">
            {children}
            <form action="#" className="flex px-3 py-1 bg-white rounded-md w-full">
                <input className="flex-grow outline-none"
                    placeholder={searchPlaceHolder}
                    onChange={searchIntent}
                />
                <button type="submit" className="outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                </button>
            </form>
        </div>
    )
}