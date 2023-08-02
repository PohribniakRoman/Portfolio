import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import avatar from "../assets/avatar.png";

export const Hero:React.FC = () => {
    return <section className="hero">
        <div className="hero--container">
            <div className="hero--content">
                <h1 className="hero--title">Front-End React <br/>Developer <div className="hero--title-icon"/></h1>
                <p className="hero--description">Hi, I'm Roman Pohribniak.A passionate Front-end<br/>React Developer based in Kyiv, Ukraine. 📌</p>
                <div className="hero--icons">
                    <a href="https://www.linkedin.com/in/roman-pohribniak-a868b0232/" target="_blank" className="hero--icons-item">
                        <AiFillLinkedin/>
                    </a>
                    <a href="https://github.com/PohribniakRoman" target="_blank" className="hero--icons-item">
                        <AiFillGithub/>
                    </a>
                </div>
            </div>
            <div className="hero--img-wrapper">
                <div className="hero--img" style={{backgroundImage:`url(${avatar})`}}></div>
            </div>
        </div>
        <div className="hero--tech">
            <h3 className="hero--tech-logo">Tech Stack</h3>
            <ul className="hero--tech-stack">
                <li className="hero--tech-stack item">
                    <div className="hero--tech-stack icon"></div>
                </li>
                <li className="hero--tech-stack item">
                    <div className="hero--tech-stack icon"></div>
                </li>
                <li className="hero--tech-stack item">
                    <div className="hero--tech-stack icon"></div>
                </li>
                <li className="hero--tech-stack item">
                    <div className="hero--tech-stack icon"></div>
                </li>
                <li className="hero--tech-stack item">
                    <div className="hero--tech-stack icon"></div>
                </li>
                <li className="hero--tech-stack item">
                    <div className="hero--tech-stack icon"></div>
                </li>
            </ul>
        </div>
    </section>
}