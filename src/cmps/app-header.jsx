
import { ReactComponent as Icon } from "../assets/images/Popcorn.svg"

export const AppHeader = () => {


    return <section className="app-header full">
        <div className="main-container main-app-header">
            <div className="header">
                <Icon/>
                <span>
                Our theater
                </span>
                <Icon/>
            </div>
        </div>
    </section>
}