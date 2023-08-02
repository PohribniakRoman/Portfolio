import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

export const Footer:React.FC = () => {
    return <section className="footer">
        <div className="footer--container">
            <h1 className="footer--title">Copyright © 2023. All rights are reserved. Made in Ukraine.</h1>
            <div className="footer--links">
                <a href="https://github.com/PohribniakRoman" target="_blank" className="footer--links-item"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/roman-pohribniak-a868b0232" target="_blank" className="footer--links-item"><AiFillLinkedin/></a>
            </div>
        </div>
    </section>
}