import mealCover from "../assets/meal-app.jpg";
import galleryCover from "../assets/gallery.jpg";

import { ProjectItem } from "./ProjectItem"

const projects = [
{
    name:"Gallery 🏞️",
    description:"",
    demo:"https://gallery-pohribniakroman.vercel.app/",
    git:"https://github.com/PohribniakRoman/Gallery",
    stack:["React","Redux","SCSS"],
    cover:galleryCover
},
{
    name:"Meal-App 🥩",
    description:"",
    demo:"https://delivery-app-pohribniakroman.vercel.app/",
    git:"https://github.com/PohribniakRoman/Meal-App",
    stack:["React","Redux","SCSS","API's"],
    cover:mealCover
},
]

export const Projects:React.FC = () => {
    return <section className="projects">
        <div className="projects--wrappper">
            <h3 className="projects--subtitle">portfolio</h3>
            <h1 className="projects--title">Each project is a unique piece of development 🧩</h1>
            {projects.map((data,index)=>{
                return <ProjectItem key={index} item={data} variant={index % 2 === 0?"straight":"reverse"}/>
            })}
        </div>
    </section>
}