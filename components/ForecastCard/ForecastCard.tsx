/**
 * the 5-day forecast component
 * 
 * ToDO: integration of subscription and fetching of a 5-day forecast
 */

import Image from "next/image";
import React from "react";
import { DayOfTheWeek } from "../../serivces/openWeatherAPI";

export default function ForecastCard({ forecast, theme }) {
    return (
        <div className="flex flex-col rounded p-4 bg-opacity-70 bg-gray-800">
            <h4 className="text-xl text-white text-opacity-70">5-day forecast for {forecast.name}</h4>
            <div className="w-full flex flex-row mt-4 justify-between space-x-0 md:space-y-0 md:space-x-4">
                {forecast.dailyForecast.map((data, index) => {

                    const { name, main, wind, weather, visibility, dt } = data;
                    const { temp, humidity, pressure, feels_like } = main;

                    const day = new Date(dt * 1000);

                    return (
                        <section key={dt} className={`rounded-lg p-3 md:p-4 items-center bg-opacity-70 bg-white font-light text-gray-800 text-opacity-70 ${theme}`}>
                            {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                            <h4 className="text-sm ">{DayOfTheWeek[day.getDay()]}</h4>
                            <p className="text-2xl md:text-5xl">{Math.round(temp)}°</p>
                            <p className="rounded-t-lg text-sm flex flex-col md:flex-row items-center">
                                {weather[0].main}
                                <Image alt={weather[0].main} quality={100} width={30} height={30} src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
                            </p>
                        </section>
                    )
                })}

            </div>

        </div>
    )
}