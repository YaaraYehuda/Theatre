import { ReactComponent as SitIcon } from "../assets/images/sit.svg"
import { dotService } from "../services/dot.service"

export const TheaterApp = () => {
    const gCinema = dotService.createCinema(8,18, {
        passRows: []
    })
    

    return <section className="theater-app full">
        <h5>Choose a sit</h5>
        <section className="theater-container main-container">
            <div className="sit-svg">
                {/* <SitIcon /> */}
                
            </div>
        </section>

    </section>


}