

export const DotDetails = () => {

    const dot = {
        dotPrice: 40,
        i: 20,
        j: 10
    }

    return <section className="dot-details">

        <h1>Price: {dot.dotPrice}</h1>
        <h4>Row {dot.i} / Col {dot.j}</h4>
        <button className="book-btn">Book</button>

    </section>
}