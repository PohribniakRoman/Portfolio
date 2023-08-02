const scrollBtn = (block:string) => {
    document.querySelector(`.${block}`)?.scrollIntoView({block:"center",behavior:"smooth"})
}
export const Navbar:React.FC = () => {
    return <nav className="navbar">
        <nav className="navbar--logo">Roman.dev</nav>
        <nav className="navbar--menu">
            <nav className="navbar--menu-item" onClick={()=>scrollBtn("banner")}>Home</nav>
            <nav className="navbar--menu-item" onClick={()=>scrollBtn("about")}>About</nav>
            <nav className="navbar--menu-item" onClick={()=>scrollBtn("projects")}>Projects</nav>
            <nav className="navbar--menu-item" onClick={()=>scrollBtn("contact")}>Contact</nav>
        </nav>
    </nav>
}