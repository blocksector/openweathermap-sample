import Image from "next/image";
import React from "react";

// Enum of directions from compass
const compassSector = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];

export default function WeatherCard({ data, displayInMetric, theme }) {

    const { name, main, wind, weather, visibility } = data;
    const { temp, humidity, pressure, feels_like } = main;

    return (
        <section className={`flex flex-row md:flex-col p-4 items-start shadow bg-opacity-70 bg-white font-light text-gray-700 justify-between items-end ${theme}`}>
            {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
            <div>
                <h4 className="rounded-t-lg text-3xl ">{name}</h4>
                <p className="rounded-t-lg text-9xl">{Math.round(temp)}°</p>
                <p className="rounded-t-lg text-xl flex flex-row items-center">
                    <Image alt={weather[0].main} quality={100} width={40} height={40} src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
                    {weather[0].main}
                </p>
                <p className="rounded-t-lg text-xl">Feels like: {feels_like}°</p>
            </div>
            <div className="md:w-full mt-6">
                <p className="w-full rounded-t-lg text-xl flex flex-col md:flex-row justify-between">
                    <span className="text-base">RH: {humidity}%</span>
                    <span className="text-base">W: {Math.round(wind.speed) + (displayInMetric ? 'm/s' : 'mi/h')} {compassSector[(wind.deg / 22.5).toFixed(0)]}</span>
                </p>
                <p className="w-full rounded-t-lg text-xl flex flex-col md:flex-row justify-between">
                    <span className="text-base">P: {Math.round(pressure / 1000)}bar</span>
                    <span className="text-base">V: {visibility / 1000}km</span>
                </p>
            </div>
        </section>
    )
}