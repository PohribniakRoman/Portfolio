export const Navbar:React.FC = () => {
    return <nav className="navbar">
        <nav className="navbar--logo">Roman.dev</nav>
        <nav className="navbar--menu">
            <nav className="navbar--menu-item">Home</nav>
            <nav className="navbar--menu-item">About</nav>
            <nav className="navbar--menu-item">Projects</nav>
            <nav className="navbar--menu-item">Contact</nav>
        </nav>
    </nav>
}