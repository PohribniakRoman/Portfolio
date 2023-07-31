import { Hero } from "./Hero"
import { Navbar } from "./Navbar"

export const Banner:React.FC = () => {
    return <section className="banner">
        <Navbar/>
        <Hero/>
    </section>
}