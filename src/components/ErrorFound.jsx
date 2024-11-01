export default function ErrorFound({title, message}) {
    return (
        <div className="error">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}