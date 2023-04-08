import React from "react";

export default function WeatherCard({ theme }) {
    return (
        <section className={`flex flex-col p-4 items-start shadow bg-opacity-70 bg-white font-light text-gray-700 ${theme}`}>
            {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
            <h4 className="rounded-t-lg text-3xl ">Bacoor City</h4>
            <p className="rounded-t-lg text-9xl">45°</p>
            <div className="w-full mt-6">
                <p className="rounded-t-lg text-xl">Cloudy</p>
                <p className="w-full rounded-t-lg text-xl flex justify-between">
                    <span className="text-base">RH: 70%</span>
                    <span className="text-base">Wind: 23°NE</span>
                </p>
            </div>
        </section>
    )
}