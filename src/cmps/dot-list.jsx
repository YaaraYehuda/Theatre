import { utilService } from "../services/util.service"


export const DotList = ({ rows }) => {
    console.log('rows:', rows)


    return <table className="table">
            {rows?.map(row => {
                console.log('row:', row)
                return <tr key= {utilService.makeId()}>
                    {row.map(dot => {
                        return <td key= {utilService.makeId()}><div className="seat-svg"></div></td>
                    })}
                </tr>
            })}
    </table>
}