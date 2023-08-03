import { useState } from "react"

const scrollBtn = (block:string) => {
    document.querySelector(`.${block}`)?.scrollIntoView({block:"center",behavior:"smooth"})
}
export const Navbar:React.FC = () => {
    const [isActive,setActive] = useState<boolean>(false)

    return <nav className="navbar">
        <nav className="navbar--logo">Roman.dev</nav>
        <nav className={`navbar--menu-icon ${isActive?"active":""}`} onClick={()=>{setActive(!isActive)}}><i/></nav>
        <nav className={`navbar--menu ${isActive?"active":""}`}>
            <nav className="navbar--menu-item" onClick={()=>{scrollBtn("banner");setActive(!isActive)}}>Home</nav>
            <nav className="navbar--menu-item" onClick={()=>{scrollBtn("about");setActive(!isActive)}}>About</nav>
            <nav className="navbar--menu-item" onClick={()=>{scrollBtn("projects");setActive(!isActive)}}>Projects</nav>
            <nav className="navbar--menu-item" onClick={()=>{scrollBtn("contact");setActive(!isActive)}}>Contact</nav>
        </nav>
    </nav>
}