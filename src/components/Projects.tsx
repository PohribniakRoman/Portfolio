import { ProjectItem } from "./ProjectItem"



export const Projects:React.FC = () => {
    return <section className="projects">
        <div className="projects--wrappper">
            <h3 className="projects--subtitle">portfolio</h3>
            <h1 className="projects--title">Each project is a unique piece of development 🧩</h1>
            <ProjectItem/>
            <ProjectItem variant="reverse"/>
            <ProjectItem/>
            <ProjectItem variant="reverse"/>
        </div>
    </section>
}