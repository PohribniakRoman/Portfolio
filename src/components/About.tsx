import svgLabel from "../assets/developer.svg";
import icon from "../assets/about-icon.png";

export const About:React.FC = () => {
    return <section className="about">
        <div className="about__wrapper">
            <div className="about--cover">
                <div className="about--cover-img">
                    <div className="about--cover-container">
                        <div className="about--cover-svg"style={{backgroundImage:`url(${svgLabel})`}}/>
                        <div className="about--cover-icon" style={{backgroundImage:`url(${icon})`}}/>
                    </div>
                </div>
            </div>
            <div className="about--content">
                <h3 className="about--subtitle">about me</h3>
                <h1 className="about--title">A dedicated Front-end Developer based in Kyiv, Ukraine 📍</h1>
                <p className="about--description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet facere praesentium modi. Iure facere voluptates labore aliquam! Labore soluta hic dolor doloribus. Molestiae iste impedit vero maiores repellat qui eveniet, hic quod, fugiat vitae tempore provident cupiditate. Nostrum, ratione repellat.</p>
            </div>
        </div>
    </section>
}