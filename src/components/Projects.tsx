import mealCover from "../assets/meal-app.jpg";
import galleryCover from "../assets/gallery.jpg";

import { ProjectItem } from "./ProjectItem"

const projects = [
{
    name:"Gallery 🏞️",
    description:"The web application is built without using third-party APIs. When a page is loaded, all media elements are loaded into the browser cache. All animations were written manually.",
    demo:"https://gallery-pohribniakroman.vercel.app/",
    git:"https://github.com/PohribniakRoman/Gallery",
    stack:["React","Redux","SCSS"],
    cover:galleryCover
},
{
    name:"Meal-App 🥩",
    description:"A web application with many interactions, such as a draggable border between the cart and store, ingredient hover effect, search and billing system.",
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