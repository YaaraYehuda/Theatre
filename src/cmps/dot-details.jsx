import { ReactComponent as CloseIcon } from "../assets/images/close.svg"


export const DotDetails = ({dot, closeModal}) => {
    console.log('dot: ', dot)
    const onBookDot = () => {
        dot.isReserved = true
        closeModal(null)
    }
    const onCloseModal = () =>{
        dot.isSelected = false
        closeModal(null)
    }
    
    return <section className="dot-details">
        <span><CloseIcon onClick={onCloseModal} /></span>
        <h1>Price: {dot.dotPrice}</h1>
        <h4> Row {dot.i + 1} / Seat {dot.j + 1}</h4>
        {dot.isReserved && <span>Seat already reserved</span>}
        {dot.isReserved && <button className="book-btn-reserved">Book</button>}
        {!dot.isReserved && <button className="book-btn" onClick={onBookDot}>Book</button>}
    </section>
}