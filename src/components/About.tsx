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
                <p className="about--description">For more than four years I have been studying the world of web development, during this time I have made many interesting non-commercial projects. Also, during this time I have learned a lot of different technologies, you will see a list of fundamental ones on my GitHub. I am currently looking for a job, I hope to find a great friendly team and interesting experience.</p>
            </div>
        </div>
    </section>
}