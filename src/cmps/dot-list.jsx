import { useState } from "react"
import { utilService } from "../services/util.service"


export const DotList = ({ rows }) => {
    console.log('rows:', rows)
    const [modalOpen, setModalOpen] = useState(null)

    const onDotClicked = (dot) => {
        dot.toggleSelectDot()
        if(dot.isSelected) setModalOpen(dot) 
    }

   

    return <table>
            {rows?.map(row => {
                console.log('row:', row)
                return <tr key= {utilService.makeId()}>
                    {row.map(dot => {
                        return <td key={dot.id}><div className={dot.isSelected? 'seat-svg-selected' : dot.isReserved? 'seat-svg-booked' : 'seat-svg'}
                                                     onClick={() => onDotClicked(dot)}></div></td>
                    })}
                </tr>
            })}

            {modalOpen && <DotDetails dot={modalOpen}/>}
    </table>
}