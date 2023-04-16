/**
 * A switch component
 */

import React from "react";
import optionStyles from './toggleOption.module.scss';


export default function ToggleOption({ labelFalse, labelTrue, onChange, value, styles }) {

    return (
        <div className={`${optionStyles.toggleOption} flex ${styles}`}>
            <span className="mr-2 text-sm font-medium text-white">
                {labelFalse}
            </span>
            <label className="inline-flex relative items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={value}
                    readOnly
                />
                <div
                    onClick={() => { onChange(!value); }}
                    className="w-11 h-6 bg-blue-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"
                ></div>
            </label>
            <span className="ml-2 text-sm font-medium text-white">
                {labelTrue}
            </span>
        </div>
    )
}