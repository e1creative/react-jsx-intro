const Tweet = ({ username, name, date, message  }) => {
    return (
        <div>
            <h4>{message}</h4>
            <p>Posted by {name} on {date}</p>
        </div>
    ) 
}