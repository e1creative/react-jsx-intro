const App = () => {
    return (
        <div>
            <Tweet username="John" date={new Date()} message="Hi there, my first tweet!" />
            <Tweet username="John" date={new Date()} message="Hi there, my first tweet!" />
            <Tweet username="John" date={new Date()} message="Hi there, my first tweet!" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))