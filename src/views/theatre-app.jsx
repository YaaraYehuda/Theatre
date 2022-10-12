import { useEffect, useState } from "react"
import { ReactComponent as SitIcon } from "../assets/images/sit.svg"
import { DotList } from "../cmps/dot-list"
import { dotService } from "../services/dot.service"

export const TheaterApp = () => {
    
    const gCinema = dotService.query(6, 18)
    const [cinema, setCinema] = useState(gCinema)
    useEffect(()=> {
        console.log('re-render')
    },[cinema])
    console.log('gCinema:', gCinema)


    return <section className="theater-app full">
        <h5>Choose a seat</h5>
        <section className="theater-container main-container">
            <DotList rows={gCinema} />
        </section>

    </section>


}