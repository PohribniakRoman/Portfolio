import {BiLinkExternal} from "react-icons/bi";
import {AiFillGithub} from "react-icons/ai";


export interface ProjectsItem{
    variant?:"straight"|"reverse";
}

export const ProjectItem:React.FC<ProjectsItem> = ({variant="straight"}) => {
    return <div className="projects--item" style={{flexDirection:variant==="straight"?"row":"row-reverse"}}>
    <a href="" target="_blank" className="projects--item-cover"/>
    <div className="projects--item-content">
        <h2 className="projects--item-title">Gallery 🏞️</h2>
        <p className="projects--item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque repellendus accusantium magnam? Iusto quos distinctio soluta nihil.</p>
        <ul className="projects--item-tech">
            <li className="projects--item-tech_icon">React</li>
            <li className="projects--item-tech_icon">Redux</li>
            <li className="projects--item-tech_icon">SCSS</li>
        </ul>
        <div className="projects--item-controls">
            <a href="" target="_blank">GitHub<AiFillGithub/></a>
            <a href="" target="_blank">Demo<BiLinkExternal/></a>
        </div>
    </div>
</div>
}