

export const DotDetails = ({dot, closeModal}) => {
    console.log('dot: ', dot)
    const onBookDot = () => {
        dot.isReserved = true
    }
    
    return <section className="dot-details">

        <h1>Price: {dot.price}</h1>
        <h4>Row {dot.i} / Col {dot.j}</h4>
        <button className="book-btn" onClick={onBookDot}>Book</button>

    </section>
}