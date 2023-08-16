import { useState } from "react"

const scrollBtn = (block:string) => {
    document.querySelector(`.${block}`)?.scrollIntoView({block:"center",behavior:"smooth"})
}
export const Navbar:React.FC = () => {
    const [isActive,setActive] = useState<boolean>(false)

    return <nav className="navbar">
        <nav className="navbar--logo" data-aos="fade-right" data-aos-once="true">Roman.dev</nav>
        <nav className={`navbar--menu-icon ${isActive?"active":""}`} onClick={()=>{setActive(!isActive)}}><i/></nav>
        <nav className={`navbar--menu ${isActive?"active":""}`}>
            <nav className="navbar--menu-item" data-aos="fade-left"  data-aos-once="true" onClick={()=>{scrollBtn("banner");setActive(!isActive)}}>Home</nav>
            <nav className="navbar--menu-item" data-aos="fade-left"  data-aos-once="true" onClick={()=>{scrollBtn("about");setActive(!isActive)}}>About</nav>
            <nav className="navbar--menu-item" data-aos="fade-left"  data-aos-once="true" onClick={()=>{scrollBtn("projects");setActive(!isActive)}}>Projects</nav>
            <nav className="navbar--menu-item" data-aos="fade-left"  data-aos-once="true" onClick={()=>{scrollBtn("contact");setActive(!isActive)}}>Contact</nav>
        </nav>
    </nav>
}