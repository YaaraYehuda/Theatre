import { ReactComponent as CloseIcon } from "../assets/images/close.svg"

export const DotDetails = () => {

    const dot = {
        dotPrice: 40,
        i: 20,
        j: 10
    }

    return <section className="dot-details">
        <span><CloseIcon /></span>
        <h1>Price: {dot.dotPrice}</h1>
        <h4> Row {dot.i + 1} / Seat {dot.j + 1}</h4>
        <button className="book-btn">Book</button>
    </section>
}