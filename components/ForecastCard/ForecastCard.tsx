/**
 * the 5-day forecast component
 * 
 * ToDO: integration of subscription and fetching of a 5-day forecast
 */

import React from "react";

export default function ForecastCard({ theme }) {
    return (
        <div className="flex flex-col rounded p-4 bg-opacity-70 bg-gray-800">
            <h4 className="text-xl text-white text-opacity-70">5-day forcast for Bacoor</h4>
            <div className="w-full flex flex-col md:flex-row mt-4 space-y-4 space-x-0 md:space-y-0 md:space-x-4">
                <section className={`rounded-lg p-4 items-center bg-opacity-70 bg-gray-800 font-light text-white text-opacity-70 ${theme}`}>
                    {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                    <h4 className="text-sm ">Day 1</h4>
                    <p className="text-5xl">45°</p>

                    <p className="text-sm">Cloudy</p>
                </section>

                <section className={`rounded-lg p-4 items-center bg-opacity-70 bg-gray-800 font-light text-white text-opacity-70 ${theme}`}>
                    {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                    <h4 className="text-sm ">Day 1</h4>
                    <p className="text-5xl">45°</p>

                    <p className="text-sm">Cloudy</p>
                </section>

                <section className={`rounded-lg p-4 items-center bg-opacity-70 bg-gray-800 font-light text-white text-opacity-70 ${theme}`}>
                    {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                    <h4 className="text-sm ">Day 1</h4>
                    <p className="text-5xl">45°</p>

                    <p className="text-sm">Cloudy</p>
                </section>

                <section className={`rounded-lg p-4 items-center bg-opacity-70 bg-gray-800 font-light text-white text-opacity-70 ${theme}`}>
                    {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                    <h4 className="text-sm ">Day 1</h4>
                    <p className="text-5xl">45°</p>

                    <p className="text-sm">Cloudy</p>
                </section>

                <section className={`rounded-lg p-4 items-center bg-opacity-70 bg-gray-800 font-light text-white text-opacity-70 ${theme}`}>
                    {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                    <h4 className="text-sm ">Day 1</h4>
                    <p className="text-5xl">45°</p>

                    <p className="text-sm">Cloudy</p>
                </section>
            </div>

        </div>
    )
}