import React from "react";

const compassSector = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];

export default function WeatherCard({ data, theme }) {

    const { name, main, wind, weather } = data;

    return (
        <section className={`flex flex-col p-4 items-start shadow bg-opacity-70 bg-white font-light text-gray-700 ${theme}`}>
            {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
            <h4 className="rounded-t-lg text-3xl ">{name}</h4>
            <p className="rounded-t-lg text-9xl">{Math.round(main.temp)}°</p>
            <div className="w-full mt-6">
                <p className="rounded-t-lg text-xl">{weather[0].main}</p>
                <p className="w-full rounded-t-lg text-xl flex justify-between">
                    <span className="text-base">RH: {main.humidity}%</span>
                    <span className="text-base">Wind: {wind.deg}°{compassSector[(wind.deg / 22.5).toFixed(0)]}</span>
                </p>
            </div>
        </section>
    )
}