import {FaMapLocationDot} from "react-icons/fa6"
import {BsMailbox2} from "react-icons/bs"


export const Contact:React.FC = () => {
    return <section className="contact">
        <div className="contact--wrapper">
            <h3 className="contact--subtitle">contact</h3>
            <h1 className="contact--title">Don't be shy! Hit me up! 👇</h1>
            <ul className="contact--container">
                <li className="contact--container-item">
                    <span>
                        <FaMapLocationDot/>
                    </span>
                    <div>
                        <h2>Location</h2>
                        <p>Kyiv, Ukraine</p>
                    </div>
                </li>
                <li className="contact--container-item">
                    <span>
                        <BsMailbox2/>
                    </span>
                    <div>
                        <h2>Mail</h2>
                        <p className="copy" onClick={(event)=>{
                            const element = event.target as HTMLDivElement;
                            element.classList.add("active")
                            setTimeout(() => {
                                element.classList.remove("active")
                            }, 400);
                            navigator.clipboard.writeText("roman.pohribniak@gmail.com")
                        }}>roman.pohribniak@gmail.com</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}