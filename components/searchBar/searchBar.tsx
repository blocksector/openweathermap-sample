import React, { useState, useRef } from "react";


export default function SearchBar({ }) {

    const [location, setLocation] = useState('');
    const locationField = useRef();

    return (
        <form action="#">
            <input ref={locationField} />
            <button type="submit">Search</button>
        </form>
    )
}