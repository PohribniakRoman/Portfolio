import {BiLinkExternal} from "react-icons/bi";
import {AiFillGithub} from "react-icons/ai";


export interface ProjectsItem{
    variant?:"straight"|"reverse";
    item:any
}

export const ProjectItem:React.FC<ProjectsItem> = ({variant="straight",item}) => {
    return <div className="projects--item" style={{flexDirection:variant==="straight"?"row":"row-reverse"}}>
    <a href="" target="_blank" className="projects--item-cover" style={{backgroundImage:`url(${item.cover})`}}/>
    <div className="projects--item-content">
        <h2 className="projects--item-title">{item.name}</h2>
        <p className="projects--item-description">{item.description}</p>
        <ul className="projects--item-tech">
            {item.stack.map((e:string)=>{
                return <li key={e} className="projects--item-tech_icon">{e}</li>
            })}
        </ul>
        <div className="projects--item-controls">
            <a href={item.git} target="_blank">GitHub<AiFillGithub/></a>
            <a href={item.demo} target="_blank">Demo<BiLinkExternal/></a>
        </div>
    </div>
</div>
}