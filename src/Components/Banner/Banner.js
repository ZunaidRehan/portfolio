import './banner.scss'
import { MyImage } from "./MyImage"
import { Name } from "./Name"

export const Banner = () => {
    return (
        <div className="banner">
            <Name />
            <MyImage />
        </div>
    )
}