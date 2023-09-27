function Status() {
    const status = true

    return (
        <h2
        style={{color: status ? "#00ff9f" : "#f64348"}}
        >Vamos estudar? {status ? "Of course!" : "Oh, no! :("}</h2>
    )
}

export default Status