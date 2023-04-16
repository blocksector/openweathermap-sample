
export enum AlertTypes {
    danger = 'bg-red-700 text-white'
}


export default function Alert({ message, alertType, duration=0 }) {
    return (
        <div className={[alertType, 'px-3', 'py-1', 'my-4', 'rounded-md'].join(" ")}>
            <p>{message}</p>
        </div>
    )
}